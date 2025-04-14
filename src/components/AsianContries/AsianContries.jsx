import React from 'react';
import { useLoaderData } from 'react-router';
import Country from '../Country/Country.jsx';

const AsianContries = () => {
  const countries = useLoaderData();

  return (
    <div>
      <h2 className="text-center mb-6 font-bold text-2xl">Asian Countries</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {countries.map(country => (
          <Country key={country.cca2} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default AsianContries;
