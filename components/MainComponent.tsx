import React from 'react';
import A from './A';
import Head from 'next/head';

const MainComponent = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"something to do" + keywords}></meta>
        <title>Main page</title>
      </Head>
      <div className="navbar">
        <A text='Main page' href={'/'} />
        <A text='Users list' href={'/users'} />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {
          `
            .navbar {
              background-color: red;
              padding: 15px;
            }


          `
        }
      </style>
    </>
  );
};

export default MainComponent;
