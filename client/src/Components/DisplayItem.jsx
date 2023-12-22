import React from "react";

function DisplayItem({title, imgSrc, price, onClick, data}) 
{
  return(
    <div onClick={() => onClick(data)} className='m-3 text-lg min-w-[20rem]'>
      
      <img src={imgSrc} className='m-auto'/>
      <div className="flex justify-between pl-5 pr-5">
        <p className="text-lg">{title}</p>
        <p className="text-lg">${price}</p>        
      </div>

    </div>
  );
}
export default DisplayItem;