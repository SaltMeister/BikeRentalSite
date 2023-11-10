import './App.css';
import {Routes, Route} from 'react-router';
import Home from './Pages/Home';
import Listings from './Pages/Listings';
import ListingDetails from './Pages/ListingDetails';
import Header from "./Components/Header";
import HeaderItem from "./Components/HeaderItem";
import About from './Pages/About';

function App() {
  return (
    <div className='font-sans min-h-screen'>
      <Header>
        <HeaderItem title="Home" link="/"/>
        <HeaderItem title="Products" link="/listings"/>
        <HeaderItem title="About" link="/about"/>
      </Header>

      {/* List of routes for different pages to load */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/listings" element= { <Listings/> }/>
        <Route path="/about" element= {<About/> } />
        <Route path="/listingDetails" element ={<ListingDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
