import React from 'react';

export default function Navbar({ name, img, desc}) {
  return (
    <nav>
      <header>
        <h4>Navigation bar</h4>
      </header>
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
