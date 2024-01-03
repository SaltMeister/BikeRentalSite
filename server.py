from flask import Flask, abort
from flask import request, jsonify
from data import DB_URI, DB_BIKE_COLLLECTION
from bson.json_util import dumps, loads 
from bson.objectid import ObjectId

from datetime import datetime, timedelta
import random
import string

from flask_cors import CORS
from pymongo import MongoClient


app = Flask(__name__)

CORS(app)

# Save list of bikes after collecting so we don't need to keep calling db
bikeList = []

client = MongoClient(DB_URI)
db = client[DB_BIKE_COLLLECTION]

bike_collection = db["bikes"]
user_collection = db["users"]

SUCCESS = {"success": True}
FAIL = {"success": False}
# Get Database reference

# /bikes => return all bike data from DB
# /bikes
@app.route("/")
def function():
    return "TestRoute"

# Get bike id or all bikes data
# Post Add Bike to list
@app.route("/bikes", methods = ["GET", "POST"])
def handleBike():
    # GET LIST OF BIKES
    if request.method == "GET":
        query = request.args.get('bikeID', default = 'all')

        if(query == 'all'): # Get All bikes not rented out
            data = list(bike_collection.find({"isTaken": False}))
        # Get Specific bike
        else:
            try:
                objInstance = ObjectId(query)
                print(objInstance)

            except Exception:
                abort(400, "Invalid ID")

            data = bike_collection.find_one({"_id": objInstance})

            if data == None:
                abort(405, "ID not found")

            # Bike is rented out
            if(checkIsRented(data)):
                print("Bike is already rented")
                abort(405, "Bike Already Rented OUT")
                
        # Convert LIST to JSON
        jsonBikeReturnData = dumps(data)
        # Return List of all bike data
        return jsonBikeReturnData
    
    # INSERT A NEW BIKE TO LIST return success or fail data
    elif request.method == "POST":
        data = request.get_json()
        # Ensure data has required fields for new bike posting
        # Model/Name
        # Price
        # Image/ Images
        try:
            model = data["model"]
            price = data["price"]
            image = data["image"]

            print(data["model"], data["price"], data["image"])
        except Exception:
            abort(400, "Invalid Inputs => Needs model, price, and image")

        newDocument = {
            "model": model,
            "price": price,
            "image": image,
            "isTaken": False,
            "takenId": None  
        }

        bike_collection.insert_one(newDocument)

        

def checkIsRented(bikeData):
    try:
        if(bikeData['isTaken'] is True):
            return True
    except Exception:
        return False
    
    return False
# Get => Check if bike is being rented  
# Post to rent out bike to user
@app.route("/rent", methods = ["GET", "POST"])
def handleRentRegister():
    # Check if bike id is rented out or not
    if request.method == "GET":
        query = request.args.get('bikeID', default = 'None')

        try:
            objInstance = ObjectId(query)
        except Exception:
            abort(400, FAIL)
        
        if query == 'None':
            print("No ID Specified")
            return FAIL

        # Get Data null == no data
        data = bike_collection.find_one({'_id': objInstance})

        isAvailable = not checkIsRented(data)

        returnData = {
            "bikeID": query,
            "isAvailable": isAvailable
        } 

        returnData.update(SUCCESS)

        return dumps(returnData)
        
    elif request.method == "POST":
        json = request.get_json()
        if json == None:
            print("JSON INVALID")
            return FAIL
        
        try:
            id = json["id"]
            userID = json["userID"]
        except Exception:
            print("Invalid JSON given")
            return FAIL    
                
        bikeObjInstance = ObjectId(id)
        userObjInstance = ObjectId(userID)

        bikeFilter = {'_id': bikeObjInstance}
        newBikeValues = { "$set": {"isTaken": True, "takenID": userID} }

        userFilter = {'_id': userObjInstance}
        newUserValue = { "$set": {"rentedBike": id} }

        # Check if user already has bike rented out
        userData = user_collection.find_one(userFilter)
        if (userData["rentedBike"] != None):
            print("User already has bike rented out.")
            returnMessage = {"reason": "User already has bike rented out."}
            returnMessage.update(FAIL)
            return returnMessage
        try:
            # Set Rented
            bike_collection.update_one(bikeFilter, newBikeValues)

            # Set Rented Bike for user
            user_collection.update_one(userFilter, newUserValue)
        except Exception as e:
            print(e)
            abort(404)
        
        return SUCCESS


@app.route("/signup", methods=["POST"])
def signup():
    userData = request.get_json()

    try:
        password = userData["password"]
        email = userData["email"]
    except Exception:
        abort(400, "Missing Parameters");
    
    # Check if Email Exists already       
    if CheckIfEmailExists(email):
        print("Email Already exists")
        returnMessage = {"reason": "Email Already Exists."}
        returnMessage.update(FAIL)
        return returnMessage
    
    # Create new db document
    newDocument = {
        "password": password,
        "email": email,
        "rentedBike": None,
        "token": None,
        "tokenExpiration": datetime.now().isoformat() #ISO FORMAT FOR DB
    }

    user_collection.insert_one(newDocument)

    return SUCCESS

def CheckIfEmailExists(email):
    searchResult = list(user_collection.find({"email": email}))

    if len(searchResult) != 0:
        return True
    
    return False


@app.route("/login", methods=["POST"])
def login():
    userData = request.get_json()

    try:
        password = userData["password"]
        email = userData["email"]
    except Exception:
        abort(400, "Missing Parameters");


    filter = {
        "$and": [ {"email": email}, {"password": password} ] 
    }

    # Find matching email and password
    result = user_collection.find_one(filter)

    if result == None:
        returnJson = {"reason": "Incorrect Password or Email"}
        returnJson.update(FAIL)
        return returnJson

    # Create new Token and set new expiration date and return token
    rand_token = generateToken()

    offsetTime = timedelta(hours=24)

    currentTime = datetime.now() + offsetTime
    currentTime = currentTime.isoformat()

    newValues = {
        "$set": {"token": rand_token, "tokenExpiration": currentTime} 
    }

    user_collection.update_one(filter, newValues)

    return {
        "success": True,
        "token": rand_token
        }


@app.route("/authenticate", methods=["POST"])
def authenticate():
    userData = request.get_json()

    try:
        token = userData["token"]
    except Exception:
        abort(400, "Missing Parameters")

    result = user_collection.find_one({"token": token})
    
    if result == None:
        print("Token Doesn't Exist")
        return FAIL
    

    # Check if token is still valid
    if result["tokenExpiration"] < datetime.now().isoformat():
        print("Token Has Expired")
        return FAIL
    
    return SUCCESS # Valid Token => Log User In

def generateToken():
    letters = string.ascii_letters
    numbers = string.digits

    token = "".join(random.choice(letters+numbers) for _ in range(10))

    return token

@app.route("/getId", methods=["GET"])
def getId():
    data = request.args.get('token', default = 'None')

    if data == "None":
        return FAIL

    result = user_collection.find_one({"token": data})

    if(result == None):
        return FAIL
    
    returnJson = {"_id": str(result["_id"])}
    returnJson.update(SUCCESS)
    
    return returnJson