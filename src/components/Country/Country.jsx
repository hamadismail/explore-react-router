import React from 'react';

const Country = ({ country }) => {
  const {
    name: { common: name },
    flags: { png: flag },
  } = country;
  return (
    <div className="p-2 rounded-lg flex justify-center items-center flex-col bg-gray-300">
      <h2 className="font-bold">{name}</h2>
      <img
        width="160px"
        className="max-w-full h-auto bg-cover aspect-[3/2] rounded-lg"
        src={flag}
      />
      <button className="btn mt-2 py-1 bg-gray-800 text-white">
        View Details
      </button>
    </div>
  );
};

export default Country;
