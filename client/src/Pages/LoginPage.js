import React, {useState, useEffect} from "react";
import { BACKENDLINK } from "../backendLink";
import { useNavigate } from "react-router";

import parseTokenFromCookies from "../cookieTokenParser";

function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Check Tokens
    async function checkAuthToken() {
      let token = parseTokenFromCookies()
      
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
      .then(response => response.json())
      .then(result => {
        console.log("Authentication Result:", result)
        if(result["success"])
          navigate(-1)// Route Back to prev page
      })
      .catch(error => {
        console.log("Failed", error)
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
    .then(response => response.json())
    .then(result => {
        console.log(result)
        if (result["success"]) {
          // Save token to cookies
          document.cookie = `token=${result["token"]}`
          navigate("/") 
          navigate(0)// Refresh Page after returning
        }

        setErrorMessage(result["reason"])      
    })
    .catch(error => {
      console.log("Failed", error)
    })  
  }
  
  function redirectToSignup() {
    navigate("/signup")
  }

  return (
    <div className="flex justify-center">
      
      <div className="m-auto mt-36 p-36">
        <h3 className="text-lg">Login</h3>
        <br/>
        <div>
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
        </div>

        <p className="text-sm hover:underline" onClick={redirectToSignup}>No account? Sign Up</p>
        <br/>

        <p className="md:text-md text-sm text-red-600">{errorMessage}</p>    

        <button onClick={SubmitForm} 
        className="float-right bg-secondary 
        pl-3 pr-3 p-1 rounded-md hover:bg-danger transition-colors duration-100
        text-white md:text-md text-sm">
          Login</button>     

      </div>

    </div>
  )
}
export default LoginPage