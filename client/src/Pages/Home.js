import React from "react";
import RedirectButtonComponent from "../Components/RedirectButtonComponent";
import MainPageCard from "../Components/MainPageCard";


function Home() 
{
  return(
    <div className='lg:text-lg md:text-md sm:text-sm 
    text-left '>
    {/* Image */}
    <div className="bg-bottom bg-cover bg-[url('https://www.ucdavis.edu/sites/default/files/styles/ucd_panoramic_image/public/media/images/about-us-uc-davis_1.jpg?h=8e58fdb5&itok=EuTd3T5a')]
    h-[40rem]
    ">
    </div>

    {/* Content */}
    <div className="lg:m-20 sm:m-0">
      <div className="p-36 pt-5">
        <div className='p-5'>
          <h3 className="text-display text-header"><b>Fill Your Transportation Needs Quickly and Hassle Free</b></h3>
          <p className="text-info">Join thousands of students as they rent out bikes for the quarter for a fraction of the price to buy one.</p>
        </div>

        <div className="flex justify-center mt-10">
          <p className="pl-10 pr-10">Get started and rent out a bike today!</p>
          <RedirectButtonComponent text="View Bikes!" navigateLink="listings"/>
        </div>      
      </div>

      <div className="p-5 flex flex-wrap">
        <div className="flex-1">
          <MainPageCard>
            <div className="border-b-4 border-highlight">
              <h3 className="text-header"><b>About Us</b></h3>
            </div>
            <p className="text-info"><b>This is just a made up webpage, all statements are not real</b>. We are a student run store that provides an easy way for students to rent out bikes that we collect and repair back to working conditions. We started operations after the pandemic in 2021 in order to provide easy access for students who want a bike, but don't want to spend too much on it with the time they have left studying at UC Davis.</p>
            <img className="mt-10" src="https://www.mackinacbikebarn.com/Assets/blue-bikes.jpg"/>
         </MainPageCard>

          <MainPageCard>
            <div className="border-b-4 border-highlight">
              <h3 className="text-header"><b>Rental Process</b></h3>
            </div>
            <p className="text-info">Renting a bike is a simple and easy process.</p>
            <br/>
            <ul className="text-info list-decimal list-inside">
              <li>Go to our listing page and find an available bike to rent.</li>
              <li>Create an account or login to make purchase.</li>
              <li>Go to our location on the UC Davis campus receive bike.</li>
              <li>Done!</li>
            </ul>
          </MainPageCard>          
        </div>

        <div className="flex-1">
          <MainPageCard>
            <div className="border-b-4 border-highlight">
              <h3 className="text-header"><b>Store Hours</b></h3>
            </div>
            <ul className="text-info">
              <li><strong>Weekdays</strong>: 11 A.M - 4 P.M</li>
              <li><strong>Saturday</strong>: 11 A.M - 4 P.M</li>
              <li><strong>Sunday</strong>: Closed</li>
              <li><strong>Holidays</strong>: Closed</li>
            </ul>
          </MainPageCard>

          <MainPageCard>
            <div className="border-b-4 border-highlight">
              <h3 className="text-header"><b>Pricing</b></h3>
            </div>
            <p className="text-info">Bikes start at $7 a month with pricing increasing depending the condition and bike model.</p>
            
            <ul className="text-info mt-2 list-inside">
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

    </div>
  );
}

export default Home;