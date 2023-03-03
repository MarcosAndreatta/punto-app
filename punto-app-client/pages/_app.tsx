//Stylesheets
import '../styles/globals.css';
import '../styles/bootstrap.css'
//Swiper styles
import 'swiper/swiper-bundle.css';

//------------------------------------
//Hooks
import React, { useEffect } from 'react';
import { SSRProvider } from 'react-bootstrap';
//-----------------------------------
import type { AppProps } from 'next/app'
//Components
import Layout from '../components/layout/Layout';
//-------------------------------------
import { motion } from 'framer-motion';
//Redux stuff
import { Provider } from 'react-redux';
import { store } from '../logica/reduxStore';
import Backdrop from '../components/UI/backdrop/Backdrop';
//</>

export default function App({ Component, pageProps, router }: AppProps) {

  //We need to use a useEffect hook to call the JS needed for bootstrap after loading the DOM
  useEffect(() => {
    const callFrameworks = async () => {
      const callBootstrap = async () => {
        const bootstrap = await import("bootstrap");
      };
      await callBootstrap();
    };
    callFrameworks();

  }, []);
  const variantes = {
    pageInitial: { opacity: 0 },
    pageAnimate: { opacity: 1 }
  };
  return <React.Fragment>
    {/* <Script src='https://code.jquery.com/jquery-3.6.3.js'/>  */}
    {/* <Script src='https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.js'/> */}
    {/* <Script id='initializeFoundation'>
    {$(document).foundation()}
    </Script> */}
    <SSRProvider>
      <Provider store={store}>
        <Layout>
          <React.Fragment>

            <motion.div id='motionDiv' key={router.asPath} variants={variantes} initial="pageInitial" animate="pageAnimate">
              <Component {...pageProps} />
            </motion.div>

          </React.Fragment>
        </Layout>
      </Provider>
    </SSRProvider>
  </React.Fragment>
}
