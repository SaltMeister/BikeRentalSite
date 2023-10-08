import React from "react";
import { useNavigate } from "react-router-dom";

function RedirectButtonComponent({text, navigateLink}) {
  const navigate = useNavigate();

  const HandleClick = (e) => {
    navigate(navigateLink)
  };

  return (
    <button onClick={HandleClick}>{text}</button>
  );
};

export default RedirectButtonComponent;