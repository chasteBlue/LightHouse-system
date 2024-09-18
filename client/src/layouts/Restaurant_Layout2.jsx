import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarRestaurant_2 from './Slidebar_restaurant_2';
import Navbar_manager from './Navbar_manager';
import LandscapeWarning from './LandscapeWarning'; 

const RestaurantLayout2 = ({ children }) => {
const location = useLocation();
const hideFooter = location.pathname === '/staff_login' || location.pathname === '/restaurant_home';

return (
    <React.Fragment >
      <LandscapeWarning />
      <div className="columns mt-6">
        <Navbar_manager />
        {!hideFooter && <div style={{ paddingTop: '3rem' }}> <SidebarRestaurant_2 /> </div>}
        <div className="column" style={{ backgroundColor: "#e5e5f2" }}>
            <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RestaurantLayout2 ;
