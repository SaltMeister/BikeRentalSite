import React from "react";

function Header({children})
{
  return(
      <div className='flex bg-dim border-b-2 border-[#023047]'>
        <div className="flex flex-2">
          <p className="justify-center md:text-display md:ml-10 ml-1 text-lg"><span className="text-header">Rent</span><span className="text-highlight">A</span><span className="text-header">Bike</span></p>
        </div>
        <div className="flex flex-1 justify-end bg-indigo-100'">
          {children}
        </div>
        
      </div>      

  );
}

export default Header;