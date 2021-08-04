import React, { Component } from 'react';

import Footer from './components/Footer/Footer';

export default function Layout({ children }) {
    return (
        <>
        <title>signworld group</title>
        <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        { children }
         <Footer/>
      <a className="scroll-top-arrow wave" style={{ display: "inline" }}>
      <i className="fa fa-angle-up">
      </i>
      </a>
      </>
      )
    }
