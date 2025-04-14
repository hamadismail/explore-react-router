import React from 'react';
import { Link } from 'react-router';

const Country = ({ country }) => {
  const {
    name: { common: name },
    flags: { png: flag },
  } = country;
  return (
    <div className="p-6 rounded-lg flex justify-center items-center flex-col bg-gray-300">
      <h2 className="font-bold">{name}</h2>
      <img
        width="200px"
        className="max-w-full h-auto bg-cover aspect-[3/2] rounded-lg"
        src={flag}
      />
      <Link to={`/${name}`}>
        <button className="btn mt-2 py-1 bg-gray-800 text-white">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Country;
