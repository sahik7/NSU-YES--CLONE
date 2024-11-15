import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed top-0 left-0 w-full h-screen bg-black z-50">
      <div className="animate-spin-slow">
        <img src="https://i.ibb.co/vszJ5w8/NSU-YES-New-logo-in-png-ezgif-com-webp-to-png-converter.png" alt="Loading..." className="md:w-36 md:h-36 w-24 h-24" />
      </div>
    </div>
  );
};

export default Loader;
