import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { BACKENDLINK } from "../backendLink";
import parseTokenFromCookies from "../cookieTokenParser";
import { useNavigate } from "react-router";
function ListingDetails() {
  //ID used in parameters
  const navigate = useNavigate()

  const {id} = useParams();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bikeData, setBikeData] = useState(null);
  const [isFetchSuccess, setFetchSuccess] = useState(false)

  useEffect(() => { 
    async function checkAuthToken() {
      let token = parseTokenFromCookies()
      console.log(token)
      
      let data = {
        token: token
      }

      let headers = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      } 
      const response = await fetch(`${BACKENDLINK}/authenticate`, headers)
      .catch(error => {
        console.log("Failed")
      })

      response.json().then((result) => {
        console.log("Authentication Result:", result)
        if(result["success"])
          setIsLoggedIn(true)
          
      })
    }
    async function getData() {
      
      const response = await fetch(`${BACKENDLINK}/bikes?bikeID=${id}`, { method: "GET",})  
      .catch(error => {
        console.log("Failed")
      })  
      console.log(response)


      // Break out if failed fetch`
      if(response == null) {
        setFetchSuccess(false);
        return;
      }  
      
      // Set values of listings
      const data = await response.json();
      setBikeData(data); 
      setFetchSuccess(true);
    }
    console.log(id)
    getData()
    checkAuthToken()
  }, [])
  
  async function RentBike() {
    // Get userID
    if(!isLoggedIn)
      navigate("/login")

    let token = parseTokenFromCookies()
    let userID = ""
    const idResponse = await fetch(`${BACKENDLINK}/getId?token=${token}`)
    .then( result => result.json())
    .then(data => {
      console.log("Token to ID:", data)
      userID = data["_id"]
    })
    .catch(error => {
      console.log("Failed")
    })

    let bodyData = {
     "id": id,
     "userID": userID
    }
    console.log(bodyData)
    let headers = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
    }

    await fetch(`${BACKENDLINK}/rent`, headers)
    .then(response => response.json())
    .then(result => {
      console.log("Did Rent Succeed:", result)
    })
    .catch(error => {
      console.log("Failed", error)
    })
  }

  function DisplayListing() {
    if (isFetchSuccess) {
      return (
        <div className="flex ml-[10vw] mr-[10vw] flex-wrap mt-10">
          <div className="flex-1">
            <img src={bikeData["image"]} className="lg:max-h-[30rem] lg:max-w-[50rem] 
            max-h-[10rem] max-w-[25rem] m-auto"/>
          </div>

          <div className="flex-1 flex lg:text-display mt-10 ml-5 
          text-md
          self-center">
            <div>
              <p>{bikeData["model"]}</p>
            </div>
            <div>
              <p className="ml-10">${bikeData["price"]}</p>
              <button onClick={RentBike}
              className="pl-5 pr-5 ml-5 mr-5 bg-primary 
              hover:bg-danger transition-colors rounded-md">Rent</button>                      
            </div>
           
          </div>


          
        </div>
      );
    }

    return (
      <div>
        <h1>LOADING...</h1>
      </div>
    );
  }

  return DisplayListing();
}

export default ListingDetails;