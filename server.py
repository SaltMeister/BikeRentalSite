from flask import Flask
from flask import request
from data import DB_URI, DB_BIKE_COLLLECTION
from bson.json_util import dumps, loads 

from flask_cors import CORS
from pymongo import MongoClient


app = Flask(__name__)

CORS(app)

# Save list of bikes after collecting so we don't need to keep calling db
bikeList = []

client = MongoClient(DB_URI)
db = client[DB_BIKE_COLLLECTION]

# Get Database reference

# /bikes => return all bike data from DB
# /bikes
@app.route("/")
def function():
    return "Done"

@app.route("/bikes", methods = ["GET", "POST"])
def handleBike():
    # GET LIST OF BIKES
    if request.method == "GET":
        collection = db['bikes']
        data = list(collection.find({}))
        
        # Convert LIST to JSON
        jsonData = dumps(data)
        # Return List of all bike data
        return jsonData
    
    # INSERT A NEW BIKE TO LIST
    elif request.method == "POST":
        pass
    pass

@app.route("/rent/<bikeID>", methods = ["GET", "POST"])
def handleRentRegister():
    if request.method == "GET":
        pass
    elif request.method == "POST":
        pass

    pass
