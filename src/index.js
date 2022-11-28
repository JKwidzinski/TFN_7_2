import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';

import Navbar from './components/Navbar';
import PopularBrowsers from './components/PopularBrowsers';
import Footer from './components/Footer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Fragment>
    <Navbar />
    <PopularBrowsers />
    <Footer />
  </Fragment>
);