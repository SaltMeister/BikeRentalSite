import React from "react";
import RedirectButtonComponent from "../Components/RedirectButtonComponent";
function Home() 
{
  return(
    <div className='lg:text-lg md:text-md sm:text-sm 
    text-left 
    lg:m-20 sm:m-0'>

      <div className='p-5'>
        <h3><b>Fill Your Transportation Needs Quickly and Hassle Free</b></h3>
        <p className="text-info">Join thousands of students as they rent out bikes for the quarter for a fraction of the price to buy one.</p>
      </div>


      <div className="flex justify-center">
        <p className="pl-10 pr-10">Get started and rent out a bike today!</p>
        <RedirectButtonComponent text="View Bikes" navigateLink="listings"/>
      </div>

      <div className="p-5 flex">
        <div className="flex-1 pl-5 pr-5">
          <div className="border-b-4 border-[#DCD2E1]">
            <h3><b>Store Hours</b></h3>
          </div>
          <p className="text-info">0---------Time</p>
        </div>

        <div className="flex-1 pl-5 pr-5">
          <div className="border-b-4 border-[#DCD2E1]">
            <h3><b>Pricing</b></h3>
          </div>
          <p className="text-info">Bikes start at $25 a quarter and can vary depending on the bike's condition and model.</p>
        </div>

        <div>

        </div>

      </div>
      
    </div>
  );
}

export default Home;