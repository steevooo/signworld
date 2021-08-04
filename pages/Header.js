import React, { Component } from 'react';
import Link from 'next/link';
import {NavLink} from 'react-router-dom';
import { useRouter } from 'next/router';
export default function Header() {
  const router = useRouter();
    return (
      
        <>

         <nav className="navbar nav-coustom navbar-expand-lg navbar-light bg-none fixed-top">
            <div className="container container-custom">
               <Link href="/">
               <a className="navbar-brand custom-navbar-brand logo-default" href="index.html"  data-aos="fade-zoom-in" data-aos-duration="1500"> <img src="img/logo.svg" className="logo " alt="" /> </a>
               </Link> 
               {/* <Link href="/">
               <a className="navbar-brand custom-navbar-brand logo-white" href="index.html"  data-aos="fade-zoom-in" data-aos-duration="1500"> <img src="img/logo.svg" className="logo " alt="" /> </a>
               </Link> */}
                 <button
                  className="navbar-toggler"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  >
               <i className="fas fa-bars"></i>
               </button>
               <div className="collapse navbar-collapse-custom navbar-collapse justify-content-lg-end" id="navbarSupportedContent">
                 <ul className="navbar-nav ml-auto mob-nav-pad-t" data-aos="fade-zoom-in" data-aos-duration="1500">

                    
                     <li className="nav-item">
                     <Link href='/' >
                     <a className={ router.pathname=='/'?"nav-link active" : "nav-link"} aria-current="page" >Home</a>
                     </Link></li>

                     <li className="nav-item">
                     <Link href="/About">
                      <a className={ router.pathname=='/About'?"nav-link active" : "nav-link"} >About us</a>
                     </Link>
                     </li>
                     <li className="nav-item">
                       <Link href="/Service">
                        <a className={ router.pathname=='/Service'?"nav-link active" : "nav-link"} >Services</a>
                         </Link>
                     </li>
                     <li className="nav-item">
                       <Link  href="/Portfolio">
                        <a className={ router.pathname=='/Portfolio'?"nav-link active" : "nav-link"} >Portfolio</a>
                        </Link>
                     </li>
                    
                     <li className="nav-item">
                       <Link  href="/Contact">
                        <a className={ router.pathname=='/Contact'?"nav-link active" : "nav-link"} > Contact us</a>
                         </Link>
                     </li>
                  </ul>
               </div>
              </div>
           </nav>
      </>
      )
    }