import React from 'react';

export default function Browser({ name, img, desc}) {
  return (
    <article>
      <header>
        <h2>{name}</h2>
        <img src={img} alt="Browser logo" width="200" height="200"></img>
      </header>
      <p>{desc}</p>
    </article>
  );
}
