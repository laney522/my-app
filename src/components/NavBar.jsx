import React from 'react';

const NavBar = () => {
  return (
    <nav className="p-4 flex gap-4">
      <img src="favicon.png" className="h-16" />
      <ul className="flex my-auto gap-8 font-bold">
        <li className="text-primary1 p-2 rounded-lg hover:bg-primary2">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="text-primary1 p-2 rounded-lg hover:bg-primary2">
          <a className="nav-link" href="/#featured">Featured</a>
        </li>
        <li className="text-primary1 p-2 rounded-lg hover:bg-primary2">
          <a className="nav-link" href="/#about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;