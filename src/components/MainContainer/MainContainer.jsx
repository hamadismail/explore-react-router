import React from 'react';
import { NavLink } from 'react-router';

const MainContainer = () => {
  return (
    <div className="pb-8 pt-4 bg-gray-600 flex justify-center">
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <NavLink to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/asia">Asia</NavLink>
        </li>
        <li>
          <NavLink to="/europe">Eupore</NavLink>
        </li>
        <li>
          <NavLink to="/africa">Africa</NavLink>
        </li>
        <li>
          <NavLink to="/america">America</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainContainer;
