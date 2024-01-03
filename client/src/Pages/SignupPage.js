import React, {useState} from "react";
import { BACKENDLINK } from "../backendLink";
import { useNavigate } from "react-router";

function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null)


  async function SubmitForm(e) {
    if (!isValidEmail(email)) {
      console.log("Invalid Email")
      setErrorMessage("Invalid Email")
      return
    }

    if (!isValidPassword(password)) {
      console.log("Invalid Password => Length Must be at least 6")
      setErrorMessage("Password must have a length of at least 6.")
      return
    }

    var data = {
      email: email,
      password: password
    }

    var headers = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)    
    }

    const response = await fetch(`${BACKENDLINK}/signup`, headers)
    .catch(error => {
      console.log("Failed")
    })

    response.json().then((result) => {
      console.log(result)

      if(result["success"])
        navigate("/login")
      
      setErrorMessage(result["reason"])
    });
  }

  function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (emailRegex.test(email)) {
      return true
    }
    return false
  }

  // Password must be 6 char or longer
  function isValidPassword(password) {
    const passRegex = /.{6,}/

    if (passRegex.test(password))
      return true
    return false
  }


  return (
    <div className="flex justify-center">
      <div className="m-auto mt-36 p-36">
        <h3 className="text-lg">Sign Up</h3>
        <br/>
        <div>
          <form>
            <p className="md:text-md text-sm text-red-600">{errorMessage}</p>

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

        <br/>
        
        <button onClick={SubmitForm} 
        className="float-right bg-secondary pl-3 pr-3 p-1 
        rounded-md hover:bg-danger transition-colors 
        duration-100 text-white md:text-md text-sm">Sign Up</button>        
      </div>

    </div>
  )
} 

export default SignupPage;