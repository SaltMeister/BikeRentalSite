import React from "react";

function Header({children})
{
  return(
      <div className='flex bg-[#EBE7ED] border-b-2 border-[#DCD2E1]'>
        <div className="flex-2">
          <p>Icon</p>
        </div>
        <div className="flex flex-1 justify-end bg-indigo-100'">
          {children}
        </div>
        
      </div>      

  );
}

export default Header;