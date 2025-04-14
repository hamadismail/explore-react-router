import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useLoaderData } from 'react-router';

const CountryDetails = () => {
  const country = useLoaderData();
  const navigate = useNavigate();

  const [showCurrency, setShowCurrency] = useState(false);

  const {
    name: { common: name },
    flags: { png: flag },
    name: { official },
    currencies,
    independent,
  } = country[0];

  const currencyKey = Object.keys(currencies)[0];

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={flag} alt="Flags" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          {independent && (
            <div className="badge badge-secondary">Independent</div>
          )}
        </h2>
        <div>
          <b>Official Name:</b> {official} <br />
          <button
            className="btn bg-gray-300"
            onClick={() => setShowCurrency(!showCurrency)}
          >
            {showCurrency ? 'Hide Currency' : 'Show Currency'}
          </button>
          {showCurrency && (
            <div>
              <p>
                <b>Currency:</b> {currencyKey}
              </p>
              <p>
                <b>Name:</b> {currencies[currencyKey].name}
              </p>
              <p>
                <b>Symbol:</b> {currencies[currencyKey].symbol}
              </p>
            </div>
          )}
        </div>
        <div className="card-actions justify-end">
          <button onClick={() => navigate('/')} className="btn bg-gray-300">
            Go Home
          </button>
          <button onClick={() => navigate(-1)} className="btn bg-gray-300">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
