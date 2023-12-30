import React, {useState} from "react";
import { BACKENDLINK } from "../backendLink";

function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function SubmitForm(e) {
    var data = {
      email: email,
      password: password
    }
    console.log("Submitting Form to login")
    var headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)    
    }

    const response = fetch(`${BACKENDLINK}/signup`, headers)
    .catch(error => {
      console.log("Failed")
    })  

    console.log(response)

  }

  return (
    <div>
      <form>
        <label for="email">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} id="email" placeholder="E-Mail"/>

        <label for="password">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Password"/>
      </form>
      <button onClick={SubmitForm}>Signup</button>
    </div>
  )
} 

export default SignupPage;