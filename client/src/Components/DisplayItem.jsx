import React from "react";

function DisplayItem({title, imgSrc, price, onClick, data}) 
{
  return(
    <div onClick={() => onClick(data)} className='m-3 lg:min-w-[20rem] min-w-0 '>
      
      <img src={imgSrc} className='m-auto'/>
      <div className="flex justify-between pl-5 pr-5">
        <p className="md:text-lg text-md">{title}</p>
        <p className="md:text-lg text-md">${price}</p>        
      </div>

    </div>
  );
}
export default DisplayItem;