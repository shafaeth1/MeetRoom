import React from 'react';
import { Link, } from 'react-router-dom';
import background from "../../assets/images/man-computer.png"

const Home = () => {

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={background} className="w-full md:max-w-sm rounded-lg" alt='background' />
        <div>
          <h1 className="min-w-md text-xl md:text-5xl font-bold">MeetRoom: Video,Audio conferencing made simple</h1>
          <p className="pt-1 lg:pt-2 pb-4 lg:pb-6 md:text-xl">There's lots to love about MeetRoom.Add flexibility, not complexity</p>
          <Link to='/room' className="p-4 bg-green-700 text-gray-200 font-semibold curson:pointer rounded-md">Get Started Meeting</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;