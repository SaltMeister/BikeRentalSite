import React, {useState, useEffect} from "react";
import { BACKENDLINK } from "../backendLink";
import { useNavigate } from "react-router";

import parseTokenFromCookies from "../cookieTokenParser";

function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    // Check Tokens
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
          navigate(-1)// Route Back to prev page
      })
    }
    checkAuthToken();

  }, [])

  async function SubmitForm(e) {
    let data = {
      email: email,
      password: password
    }
    
    let headers = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)    
    }

    const response = await fetch(`${BACKENDLINK}/login`, headers)
    .catch(error => {
      console.log("Failed")
    })  

    response.json().then((result) => {
      console.log(result)
      if (result["success"]) {
        // Save token to cookies
        document.cookie = `token=${result["token"]}`
        navigate("/") 
      }

      console.log(document.cookie)
    });

  }
  
  function redirectToSignup() {
    navigate("/signup")
  }

  return (
    <div className="flex justify-center">
      <div className="m-auto mt-36 pt-10 pb-10 pl-20 pr-20">
        <form>
          <label className="md:text-lg text-md">Email:</label>
          <br/>
          <input onChange={(e) => setEmail(e.target.value)} placeholder="E-Mail" 
          className="md:text-md text-sm h-10 shadow-sm shadow-dim rounded-lg p-2 w-full
          "/>
          <br/>
          <br/>
          <label className="md:text-lg text-md">Password:</label>
          <br/>
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" 
          className="md:text-md text-sm h-10 shadow-sm shadow-dim rounded-lg p-2 w-full
          "/>
        </form>
        <p className="text-sm hover:underline" onClick={redirectToSignup}>No account? Sign Up</p>
        <br/>
        <button onClick={SubmitForm} className="float-right bg-secondary pl-3 pr-3 p-1 rounded-md hover:bg-danger transition-colors duration-100">Login</button>        
      </div>

    </div>
  )
}
export default LoginPage