//Todo Display profile for user
import React, {useState, useEffect} from "react";
import parseTokenFromCookies from "../cookieTokenParser";
import { BACKENDLINK } from "../backendLink";
import { useNavigate } from "react-router";

function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState("")
  const [rentedBikeID, setRentedBikeID] = useState(null)


  const navigate = useNavigate()

  useEffect(() => {
    async function CheckIfTokenIsValid() {
      let token = parseTokenFromCookies()

      let data = {
        "token": token
      }
      let headers = {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
      await fetch(`${BACKENDLINK}/authenticate`, headers)
      .then(response => response.json())
      .then(result => {
        console.log(result)

        if(!result["success"])
          navigate("/login")  

        setIsLoggedIn(true);
      })
      .catch(error => {
        console.log("Failed", error)
        return
      })
    }

    async function GatherUserDataFromServer() {

      //todo get user ata from server an display that data.
      await fetch(`${BACKENDLINK}` + "/getUserData?token=" + parseTokenFromCookies())
      .then(response => response.json())
      .then(result => {
        console.log(result)

        setRentedBikeID(result["rentedBike"])
        setEmail(result["email"])
      })
      .catch(error => {
        console.log("Failed", error)
      })  
    }

    CheckIfTokenIsValid()
    GatherUserDataFromServer()

  }, [])



  return (
    <div>
      <p>====</p>
      <div>
        <p>Associated Email: {email}</p>        
      </div>
      <div>
        <p>Currently Renting: {rentedBikeID === null ? "Nothing" : "Something"} </p>
        <img src=""/>// Hold Bike Image     
      </div>

    </div>
  )
}

export default Profile