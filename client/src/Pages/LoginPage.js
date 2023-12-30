import React, {useState} from "react";

function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function SubmitForm(e) {
    var data = {
      email: email,
      password: password
    }
    console.log("Submitting Form to login")

    

  }
  return (
    <div>
      <form>
        <label for="email">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} id="email" placeholder="E-Mail"/>

        <label for="password">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Password"/>
        <input onClick={SubmitForm}type="submit"/>
      </form>
    </div>
  )
}
export default LoginPage