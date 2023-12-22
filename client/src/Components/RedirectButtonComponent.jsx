import React from "react";
import { useNavigate } from "react-router-dom";

function RedirectButtonComponent({text, navigateLink}) {
  const navigate = useNavigate();

  const HandleClick = (e) => {
    navigate(navigateLink)
  };

  return (
    <div className='text-md p-3
                    rounded-lg bg-secondary text-white
                    hover:bg-danger transition-colors' >
      <button onClick={HandleClick}>{text}</button>
    </div>
    
  );
};

export default RedirectButtonComponent;