import React from "react";
import { useNavigate } from "react-router";
function HeaderItem({title, link})
{
  const navigate = useNavigate();

  const HandleClick = (e) => {
    navigate(link);
  }

  return(
    <div className='text-md m-4 p-3 pl-10 pr-10 ml-2 mr-2
                    rounded-lg bg-secondary text-white
                    hover:bg-danger transition-colors duration-100
                    ' 
    onClick={HandleClick}>

      <h3><b>{title}</b></h3>

    </div>
  );
}

export default HeaderItem;