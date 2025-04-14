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
      { path: 'asia', Component: AsianContries },
      { path: 'europe', Component: EuropeanContries },
      { path: 'america', Component: AmericanCountries },
      { path: 'africa', Component: AfricanCountries },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
);
