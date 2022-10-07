import Head from 'next/head';
import Link from 'next/link';
import React from "react";
import Navbar from './navbar.js';
import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';
import Page4 from './page4.js';
import Page5 from './page5.js';

export default function Home(){

    return (
        <div>
            <Head>
                <title>Hire Jae!</title>
            </Head>

            <header>
            <Navbar/>
            </header>

            <main className="bg-main-bg">
              <div className ="flex flex-col" >
                <div><Page1/></div>
                <div><Page2/></div>
                <div><Page3/></div>
                <div><Page4/></div>
                <div><Page5/></div>
              </div>
            </main>
            <footer className = "p-4 bg-footer-bg text-gray-50 justify-center">
              <h1 className ="text-xl font-semibold">Credits</h1>
            
                <div> 
                <p> 
                  <a href="http://www.slidescarnival.com/?utm_source=template">Slide Template by Slides Carnival</a>
                  </p>
                  <p>  
                  <a href="http://unsplash.com/&utm_source=slidescarnival">Inspiration from Unsplash</a>  <a href="https://genderphotos.vice.com/"> and The Gender Spectrum Collection</a>
                  </p>
                  <p> 
                  <Link href="/start">Site Made With Next.js</Link>
                  </p>
                </div>

            </footer>
        </div>
    );
          
}
