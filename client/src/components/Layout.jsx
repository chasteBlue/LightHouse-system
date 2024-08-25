import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Layout = ({ children }) => {
    const location = useLocation();
    const hideFooter = location.pathname === '/login' || location.pathname === '/register';

    return (
        <React.Fragment>
            <Navbar />
            <div className="column">
                <main style={{ paddingTop: '4rem' }}>{children}</main>
                {!hideFooter && <Footer />}
            </div>
        </React.Fragment>
    );
}

export default Layout;
