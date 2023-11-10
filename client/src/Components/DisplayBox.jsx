import React from "react";

function DisplayBox({children}) 
{
  return(
    <div className='flex 
    lg:flex-row sm:flex-col 
    lg:text-left sm:text-center'>
      {children}
    </div>
  );
}

export default DisplayBox;