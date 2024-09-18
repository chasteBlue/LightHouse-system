import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarFrontDesk from './Slidebar_frontdesk';
import Navbar_manager from './Navbar_manager';

const FrontDeskLayout = ({children}) => {
    const location = useLocation();
    const hideFooter = location.pathname === '/staff_login' ||  location.pathname === '/frontdesk_home';
    
  return (
    <React.Fragment>
        <div className="columns mt-6">
            <Navbar_manager/>
            {!hideFooter && <div style={{ paddingTop: '3rem' }}> <SidebarFrontDesk/> </div>}
                <div className="column" style={{backgroundColor:"#e5e5f2"}}>
                    <main>{children}</main>
                </div>
        </div>
    </React.Fragment>
  )
}

export default FrontDeskLayout;