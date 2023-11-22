import React from "react";
import RedirectButtonComponent from "../Components/RedirectButtonComponent";
import MainPageCard from "../Components/MainPageCard";


function Home() 
{
  return(
    <div className='lg:text-lg md:text-md sm:text-sm 
    text-left 
    lg:m-20 sm:m-0'>

    <div className="p-36 pt-5">
      <div className='p-5'>
        <h3 className="text-display"><b>Fill Your Transportation Needs Quickly and Hassle Free</b></h3>
        <p className="text-info">Join thousands of students as they rent out bikes for the quarter for a fraction of the price to buy one.</p>
      </div>

      <div className="flex justify-center">
        <p className="pl-10 pr-10">Get started and rent out a bike today!</p>
        <RedirectButtonComponent text="View Bikes!" navigateLink="listings"/>
      </div>      
    </div>


      <div className="p-5 flex flex-wrap">
        <div className="flex-1">
          <MainPageCard>
            <div className="border-b-4 border-[#DCD2E1]">
              <h3><b>About Us</b></h3>
            </div>
            <p className="text-info">We are <b>not a real organization</b>, but. We are a student run store that provides an easy way for students to rent out bikes that we collect and repair back to working conditions. We started operations after the pandemic in 2021 in order to provide easy access for students who want a bike, but don't want to spend too much on it with the time they have left studying at UC Davis.</p>
          </MainPageCard>

          <MainPageCard>
            <div className="border-b-4 border-[#DCD2E1]">
              <h3><b>Rental Process</b></h3>
            </div>
            <p className="text-info">Renting a bike is a simple and easy process.</p>
            <br/>
            <ul className="text-info list-decimal ml-3">
              <li>Go to our listing page and find an available bike to rent.</li>
              <li>Create an account or login to make purchase.</li>
              <li>Go to our location on the UC Davis campus receive bike.</li>
              <li>Done!</li>
            </ul>
          </MainPageCard>          
        </div>

        <div className="flex-1">
          <MainPageCard>
            <div className="border-b-4 border-[#DCD2E1]">
              <h3><b>Store Hours</b></h3>
            </div>
            <ul className="text-info">
              <li>Weekdays: 11 A.M - 4 P.M</li>
              <li>Saturday: 11 A.M - 4 P.M</li>
              <li>Sunday: Closed</li>
              <li>Holidays: Closed</li>
            </ul>
          </MainPageCard>

          <MainPageCard>
            <div className="border-b-4 border-[#DCD2E1]">
              <h3><b>Pricing</b></h3>
            </div>
            <p className="text-info">Bikes start at $7 a month with pricing increasing depending the condition and bike model.</p>
            
            <ul className="text-info mt-2">
              <li>$10 Road Bike</li>
              <li>$7 Mountain Bike</li>
              <li>$8 Cruiser Bike</li>
            </ul>
          
          </MainPageCard>          
        </div>


        <div>

        </div>

      </div>
      
    </div>
  );
}

export default Home;