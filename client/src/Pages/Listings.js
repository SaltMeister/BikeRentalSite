import React, { useState, useEffect } from "react";
import DisplayBox from "../Components/DisplayBox";
import DisplayItem from "../Components/DisplayItem";

function Listings() 
{
  const [fetchSuccess, setFetchSuccess] = useState(true);

  const [listingArray, setListingArray] = useState(["", ""]);

  // Call API  GET DATA
  // Store in ARray
  // MAP DATA and Display them in boxes
  useEffect(() =>{
    async function getData() {
      const response = await fetch("http://127.0.0.1:5000/bikes")
      .catch(error => {
        console.log("Failed")
      })

      // Break out if failed fetch`
      if(response == null) {
        setFetchSuccess(false);
        return;
      }
        

      const data = await response.json();
      setListingArray(data);
    } 

    getData();
    // Make Database call and set Array
  }, []);

  return(
    <div className='lg:m-14 md:m-5 sm:m-0 bg-orange-400'>
      <DisplayListings fetchSuccess={fetchSuccess} listingArray={listingArray} />
    </div>
  );
}

// Conditional Rendering for successful communication to API
function DisplayListings({fetchSuccess, listingArray})
{
  // Failed To Connect
  if(!fetchSuccess)
    return <h3>Failed To Connect, cannot show listings</h3>


  return(
    <DisplayBox>
      {listingArray.map((element, key) => {

        return <DisplayItem key={key} title={element.model} imgSrc={element.image} price={element.price}/>

      })}
    </DisplayBox>
  );
}
export default Listings