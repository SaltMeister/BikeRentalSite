import React from "react";
import { useNavigate } from "react-router";
function HeaderItem({title, link})
{
  const navigate = useNavigate();

  const HandleClick = (e) => {
    navigate(link);
  }

  return(
    <div className='lg:text-md lg:m-4 lg:p-3 lg:pl-10 lg:pr-10 lg:ml-2 lg:mr-2
                    rounded-lg bg-secondary text-white
                    hover:bg-danger transition-colors duration-100
                    
                    text-sm p-1 m-1
                    ' 
    onClick={HandleClick}>

      <h3 className="text-center"><b>{title}</b></h3>

    </div>
  );
}

export default HeaderItem;