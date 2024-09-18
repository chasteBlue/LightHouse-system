import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarBar from './Slidebar_bar';
import Navbar_manager from './Navbar_manager';
import LandscapeWarning from './LandscapeWarning'; 

const BarLayout = ({ children }) => {
const location = useLocation();
const hideFooter = location.pathname === '/staff_login' || location.pathname === '/bar_home';

return (
    <React.Fragment >
      <LandscapeWarning />
      <div className="columns mt-6">
        <Navbar_manager />
        {!hideFooter && <div style={{ paddingTop: '3rem' }}> <SidebarBar /> </div>}
        <div className="column" style={{ backgroundColor: "#e5e5f2" }}>
            <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BarLayout ;
