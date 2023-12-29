import React from "react";
import { useNavigate } from "react-router";
function HeaderItem({title, link})
{
  const navigate = useNavigate();

  const HandleClick = (e) => {
    navigate(link);
  }

  return(
    <div className='md:text-md md:m-4 md:p-3 md:pl-10 md:pr-10 md:ml-2 md:mr-2
                    rounded-lg bg-secondary text-white
                    hover:bg-danger transition-colors duration-100
                    
                    text-sm p-2 m-2
                    ' 
    onClick={HandleClick}>

      <h3 className="text-center"><b>{title}</b></h3>

    </div>
  );
}

export default HeaderItem;