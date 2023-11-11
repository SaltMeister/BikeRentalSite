import React, { useEffect } from "react";

import { useParams } from "react-router";

function ListingDetails() {
  //ID used in parameters
  const {id} = useParams();

  useEffect(() => {
    console.log(id)
    // Fetch http://127.0.0.1:5000/bikes/id
  }, [])
}

export default ListingDetails;