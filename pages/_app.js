import React, { Component } from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import 'react-toastify/dist/ReactToastify.css';

import App from 'next/app';
import Layout from '../components/Layout/Layout';
function MyApp({ Component, pageProps }) {
	useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
      return (
     <Layout>
       <Component {...pageProps} />
     </Layout>
    
      )
}

export default MyApp;


