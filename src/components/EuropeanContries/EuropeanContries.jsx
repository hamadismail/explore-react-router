import React from 'react';
import { useLoaderData } from 'react-router';
import Country from '../Country/Country.jsx';

const EuropeanContries = () => {
  const countries = useLoaderData();

  return (
    <div>
      <h2 className="text-center mb-6 font-bold text-2xl">
        European Countries
      </h2>

      <div className="grid grid-cols-5 gap-2">
        {countries.map(country => (
          <Country key={country.cca2} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default EuropeanContries;
