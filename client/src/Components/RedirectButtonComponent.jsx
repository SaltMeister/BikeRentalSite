import React from "react";
import { useNavigate } from "react-router-dom";

function RedirectButtonComponent({text, navigateLink}) {
  const navigate = useNavigate();

  const HandleClick = (e) => {
    navigate(navigateLink)
  };

  return (
    <div className='text-md p-3
                    rounded-lg bg-[#3A9D53] text-white' >
      <button onClick={HandleClick}>{text}</button>
    </div>
    
  );
};

export default RedirectButtonComponent;