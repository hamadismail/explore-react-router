import React from 'react';

const MainContainer = () => {
  return (
    <div className="pb-8 pt-4 bg-gray-600 flex justify-center">
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>

      <div className="country-container"></div>
    </div>
  );
};

export default MainContainer;
