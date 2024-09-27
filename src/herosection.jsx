import React from 'react';
import heroimg from '../src/assets/fun-cartoon-casual-character-copy 1.png';
   
const HeroSection = () => {
  return (
    <>
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6 mt-5 pt-5">
          <h2 className='mt-5 pt-5'>Fair price ride</h2>
          <h1>
            Rent our <span className='text-warning'>Scooter</span>
          </h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="col-md-6">
          <img src={heroimg} alt="hero" />
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
