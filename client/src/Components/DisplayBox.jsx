import React from "react";

function DisplayBox({children}) 
{
  return(
    <div className='flex 
    lg:flex-row sm:flex-col 
    lg:text-left sd:text-center'>
      {children}
    </div>
  );
}

export default DisplayBox;