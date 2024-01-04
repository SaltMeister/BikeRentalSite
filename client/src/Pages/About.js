import React from "react";
function About()
{ // Todo Fill out About page to display
  return(
    <div className="m-36">
      <div>
        <h3 className="md:text-display text-lg">About Us</h3>
      </div>
      <div>
        <p className="md:text-md text-sm">
          <b> This is just a made up webpage, all statements are not real</b>.
          We are a student run store that provides an easy way for students to
          rent out bikes that we collect and repair back to working conditions. We started 
          operations after the pandemic in 2021 in order to provide easy
          access for students who want a bike, but don't want to spend 
          too much on it with the time they have left studying at UC Davis.
        </p>
      </div>
    </div>
  );
}

export default About;