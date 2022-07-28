import React from 'react';
import { Link } from 'react-router-dom';
import background from "../../Assets/Images/man-computer.png"

const Home = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={background} class="max-w-sm rounded-lg" alt='back' />
        <div>
          <h1 class="min-w-md text-5xl font-bold">MeetRoom: Video,Audio conferencing made simple</h1>
          <p class="py-6 text-xl">There's lots to love about MeetRoom.Add flexibility, not complexity</p>
          <Link to='/join' class="btn btn-primary">Get Started Meeting</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;