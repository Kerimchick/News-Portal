import React from 'react';
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({children}) => {
    return (
        <>
          <Header />
            <main className="main">
                <div className="container">
                {children}
                </div>
            </main>
          <Footer />
        </>
    );
};

export default Layout;