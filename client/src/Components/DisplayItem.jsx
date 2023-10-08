import React from "react";

function DisplayItem({title, imgSrc, price}) 
{
  return(
    <div className='m-3 text-lg'>
      
      <img src={imgSrc} className='m-auto'/>

      <p className="text-lg">{title}</p>
      <p className="text-info">${price}</p>
    </div>
  );
}
export default DisplayItem;