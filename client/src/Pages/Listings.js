import React, { useState, useEffect } from "react";
import DisplayBox from "../Components/DisplayBox";
import DisplayItem from "../Components/DisplayItem";
import { useNavigate } from "react-router-dom";
import { BACKENDLINK } from "../backendLink";
function Listings() 
{
  const [fetchSuccess, setFetchSuccess] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false)
  const [listingArray, setListingArray] = useState(["", ""]);
  
  // Call API  GET DATA
  // Store in ARray
  // MAP DATA and Display them in boxes
  useEffect(() =>{
    async function getData() {
      const response = await fetch(`${BACKENDLINK}/bikes`, { method: "GET"})
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
      setIsLoaded(true)
    } 

    // Make Database call and set Array
    getData();
    
  }, []);

  return(
    <div className='lg:m-14 md:m-5 m-0'>
      <DisplayListings fetchSuccess={fetchSuccess} listingArray={listingArray} isLoaded={isLoaded} />
    </div>
  );
}

// Conditional Rendering for successful communication to API
function DisplayListings({fetchSuccess, listingArray, isLoaded})
{
  const navigate = useNavigate();
  // Failed To Connect
  if(!fetchSuccess)
    return <h3 className="text-center text-xl">Failed To Connect, cannot show listings</h3>

  // Perform click on listing based on the data (key) index value returned from child
  const handleClick = ( (selectedListingKey) => {
    // Access to bike _ID
    let selectedBikeID = listingArray[selectedListingKey]._id;
    let IDString = selectedBikeID.$oid;

    navigate(`/listingDetails/${IDString}`,);

  });

  if (isLoaded){
    return(
      <div className="ml-10 mr-10">
        <h3 className="md:text-display md:m-10 text-md m-5">View our large collection of renewed old bikes!</h3>
        <DisplayBox>
          {listingArray.map((element, key) => {

            return <DisplayItem key={key} data={key} title={element.model} imgSrc={element.image} price={element.price} onClick={handleClick}/>

          })}
        </DisplayBox>      
      </div>

    );    
  }

  return(
    <div className="flex justify-center">
      <p className="text-display">LOADING</p>
    </div>
  )

}
export default Listings