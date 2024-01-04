import React from "react";
import { TbCircleDotted } from "react-icons/tb";

const ClickLoadButton = ({buttonText, onClickFunction, isLoading}) => {

  function HandleButtonText() {
    console.log(buttonText, isLoading)
    if (!isLoading)
      return ( <p className="text-white md:text-md text-sm">{buttonText}</p> )
    
    // Todo Return Loading Circle
    return ( <div class="animate-spin"><TbCircleDotted size={35}/></div>
    )
  }

  return(
    <div>
      <button onClick={onClickFunction} 
          className="float-right bg-secondary 
          pl-3 pr-3 p-1 rounded-md hover:bg-danger transition-colors duration-100
          text-white md:text-md text-sm">
            <HandleButtonText/>
      </button>          
    </div>

  )

}
export default ClickLoadButton