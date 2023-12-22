import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

function ListingDetails() {
  //ID used in parameters
  const {id} = useParams();

  const [bikeData, setBikeData] = useState(null);
  const [isFetchSuccess, setFetchSuccess] = useState(false)
  useEffect(() => { 
    async function getData() {
      const response = await fetch(`http://127.0.0.1:5000/bikes?bikeID=${id}`, { method: "GET",})  
      .catch(error => {
        console.log("Failed")
      })  
      console.log(response)


      // Break out if failed fetch`
      if(response == null) {
        setFetchSuccess(false);
        return;
      }  
      
      // Set values of listings
      const data = await response.json();
      setBikeData(data); 
      setFetchSuccess(true);
    }
    console.log(id)
    getData()

  }, [])

  function DisplayListing() {
    if (isFetchSuccess) {
      return (
        <div className="flex ml-[10vw] mr-[10vw] flex-wrap mt-10">
          <div className="flex-1">
            <img src={bikeData["image"]} className="max-h-[30rem] max-w-[50rem] m-auto"/>
          </div>

          <div className="flex-1 flex text-display mt-10 ml-5 self-center">
            <div>
              <p>{bikeData["model"]}</p>
            </div>
            <div>
              <p className="ml-10">${bikeData["price"]}</p>
              <button className="pl-5 pr-5 ml-5 mr-5 bg-primary hover:bg-danger transition-colors rounded-md">Rent</button>                      
            </div>
           
          </div>


          
        </div>
      );
    }

    return (
      <div>
        <h1>LOADING...</h1>
      </div>
    );
  }

  return DisplayListing();
}

export default ListingDetails;