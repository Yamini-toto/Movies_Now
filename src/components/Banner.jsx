import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://miro.medium.com/v2/resize:fit:1000/1*Gpp6Amh1ZvotJgzVIb99WQ.png)`,
      }}
    >
      <div className="text-white text-2xl bg-gray-900/60 p-4 text-center w-full ">
        Avengers Movies
      </div>
    </div>
  );
};

export default Banner;
