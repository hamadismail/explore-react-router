import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AllCountry from './components/AllCountry/AllCountry.jsx';
import AsianContries from './components/AsianContries/AsianContries.jsx';
import EuropeanContries from './components/EuropeanContries/EuropeanContries.jsx';
import AmericanCountries from './components/AmericanCountries/AmericanCountries.jsx';
import AfricanCountries from './components/AfricanContries/AfricanCountries.jsx';
import CountryDetails from './components/CountryDetails/CountryDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        loader: () => fetch('https://restcountries.com/v3.1/all'),
        Component: AllCountry,
      },
      {
        path: 'asia',
        loader: () => fetch('https://restcountries.com/v3.1/region/asia'),
        Component: AsianContries,
      },
      {
        path: 'europe',
        loader: () => fetch('https://restcountries.com/v3.1/region/europe'),
        Component: EuropeanContries,
      },
      {
        path: 'america',
        loader: () => fetch('https://restcountries.com/v3.1/region/america'),
        Component: AmericanCountries,
      },
      {
        path: 'africa',
        loader: () => fetch('https://restcountries.com/v3.1/region/africa'),
        Component: AfricanCountries,
      },
      {
        path: '/:countryId',
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/name/${params.countryId}`),
        Component: CountryDetails,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
);
