import React from "react";

function DisplayItem({title, imgSrc, price, onClick, data}) 
{
  return(
    <div onClick={() => onClick(data)}className='m-3 text-lg min-w-[20rem]'>
      
      <img src={imgSrc} className='m-auto'/>

      <p className="text-lg">{title}</p>
      <p className="text-info">${price}</p>
    </div>
  );
}
export default DisplayItem;