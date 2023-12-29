import React, { useState, useEffect } from "react";
import DisplayBox from "../Components/DisplayBox";
import DisplayItem from "../Components/DisplayItem";
import { useNavigate } from "react-router-dom";

function Listings() 
{
  const [fetchSuccess, setFetchSuccess] = useState(true);

  const [listingArray, setListingArray] = useState(["", ""]);
  
  // Call API  GET DATA
  // Store in ARray
  // MAP DATA and Display them in boxes
  useEffect(() =>{
    async function getData() {
      const response = await fetch("http://127.0.0.1:5000/bikes", { method: "GET"})
      .catch(error => {
        console.log("Failed")
      })

      // Break out if failed fetch`
      if(response == null) {
        setFetchSuccess(false);
        return;
      }
        
      // Set values of listings
      const data = await response.json();
      setListingArray(data); 
    } 

    // Make Database call and set Array
    getData();
    
  }, []);

  return(
    <div className='lg:m-14 md:m-5 m-0'>
      <DisplayListings fetchSuccess={fetchSuccess} listingArray={listingArray} />
    </div>
  );
}

// Conditional Rendering for successful communication to API
function DisplayListings({fetchSuccess, listingArray})
{
  const navigate = useNavigate();
  // Failed To Connect
  if(!fetchSuccess)
    return <h3>Failed To Connect, cannot show listings</h3>

  // Perform click on listing based on the data (key) index value returned from child
  const handleClick = ( (selectedListingKey) => {
    // Access to bike _ID
    console.log(listingArray)
    let selectedBikeID = listingArray[selectedListingKey]._id;
    let IDString = selectedBikeID.$oid;

    console.log(IDString)

    navigate(`/listingDetails/${IDString}`,);

  });
  return(
    <div>
      <h3 className="md:text-display md:m-10 text-md m-5">View our large collection of renewed old bikes!</h3>
      <DisplayBox>
        {listingArray.map((element, key) => {

          return <DisplayItem key={key} data={key} title={element.model} imgSrc={element.image} price={element.price} onClick={handleClick}/>

        })}
      </DisplayBox>      
    </div>

  );
}
export default Listings