import './App.css';
import {Routes, Route} from 'react-router';
import Home from './Pages/Home';
import Listings from './Pages/Listings';
import ListingDetails from './Pages/ListingDetails';
import Header from "./Components/Header";
import HeaderItem from "./Components/HeaderItem";
import About from './Pages/About';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Profile from './Pages/Profile';

import { useState, useEffect } from 'react';
import { BACKENDLINK } from './backendLink';
import parseTokenFromCookies from './cookieTokenParser';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      await fetch(`${BACKENDLINK}/authenticate`, headers)
      .then(response => response.json())
      .then(result => {
        console.log("Authentication Result:", result)
        if(result["success"])
          setIsLoggedIn(true)
        })
      .catch(error => {
        console.log("Failed", error)
        return
      })
    }
    checkAuthToken();
  }, [])
  function DisplayLogin({isLoggedIn}) {
    if (!isLoggedIn)
      return <HeaderItem title="Login" link="/login"/>
    
    return <HeaderItem title="Profile" link="/profile"/>
  }
  return (
    <div className='font-sans min-h-screen'>
      <Header>
        <HeaderItem title="Home" link="/"/>
        <HeaderItem title="Products" link="/listings"/>
        <HeaderItem title="About" link="/about"/>
        <DisplayLogin isLoggedIn={isLoggedIn}/>
      </Header>

      {/* List of routes for different pages to load */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/listings" element= { <Listings/> }/>
        <Route path="/about" element= {<About/> } />
        <Route path="/listingDetails/:id" element ={<ListingDetails/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        //ToDo Profile Page
      </Routes>
    </div>
  );
}

export default App;
