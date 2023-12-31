import React from "react";
import { useNavigate } from "react-router-dom";

function RedirectButtonComponent({text, navigateLink}) {
  const navigate = useNavigate();

  const HandleClick = (e) => {
    navigate(navigateLink)
  };

  return (
    <div className='md:text-md sm:p-3 text-sm p-1
                    rounded-lg bg-secondary text-white
                    hover:bg-danger transition-colors' >
      <button onClick={HandleClick}>{text}</button>
    </div>
    
  );
};

export default RedirectButtonComponent;