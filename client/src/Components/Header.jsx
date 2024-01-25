import React from "react";

function Header({children})
{
  return(
      <div className='flex bg-dim border-b-2 border-[#023047]'>
        <div className="flex flex-2 items-center">
          <p className="justify-center lg:text-display md:text-md md:ml-10 ml-1 text-sm ">
            <span className="text-header">Rent</span>
            <span className="text-highlight">A</span>
            <span className="text-header">Bike</span>
          </p>
        </div>
        <div className="flex flex-1 justify-end bg-indigo-100'">
          {children}
        </div>
        
      </div>      

  );
}

export default Header;