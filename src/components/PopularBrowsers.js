import React from 'react';
import Browser from './Browser'
import data from '../data/browsers.json';

export default function PopularBrowsers() {
  return (
    <section>
      <header>
        <h1>Popular web browsers</h1>
      </header>
      {data.map(browser => {
        return (
          <Browser 
            name={browser.name} 
            img={browser.img} 
            desc={browser.desc} 
          />
        );
      })}
    </section>
  );
}
