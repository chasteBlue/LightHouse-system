import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoHome,IoPerson, IoChevronBack,  IoChevronForward,  IoListOutline, IoFastFoodOutline, IoWalkOutline} from 'react-icons/io5';
import 'bulma/css/bulma.min.css';
import './layouts.css';
import '../App.css';

const SidebarRestaurant_1 = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      const isMobileTablet =
        window.innerWidth <= 1024; 
      setIsMobileOrTablet(isMobileTablet);
      if (isMobileTablet) {
        setSidebarOpen(true); 
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (!isMobileOrTablet) {
      setSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <section className='section-p1 side-color'style={{
      transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-20%)',
      transition: 'transform 0.5s ease-in', 
    }}>
        <div className='columns'>
        {/* Sidebar */}
        <aside className='aside-space' style={{ transition: 'width 0.3s', position: 'relative' }}>
            {!isMobileOrTablet && (
            <button
              className={`button button-float button-aside ${
                isSidebarOpen ? 'hide-toggle' : ''
              }`}
              onClick={toggleSidebar}
              style={{
                position: 'absolute',
                top: '10px',
                right: '-20px',
                width: '40px',
                height: '40px',
                textAlign: 'center',
                transition: 'right 0.3s',
                zIndex: '1',
                boxShadow: '2px 2px 0px blue'
              }}
            >
              {isSidebarOpen ? <IoChevronBack /> : <IoChevronForward/>}
            </button>
          )}

            <nav className='menu'>
                <p className='subtitle' style={{ display: isSidebarOpen ? 'block' : 'none', paddingTop: '50px' }}> Restaurant Desk </p>

                <p className='menu-label' style={{ display: isSidebarOpen ? 'block' : 'none' }}> General</p>
                    <ul className='menu-list'>
                        <li>
                            <Link to='/restaurant_home' title="Restaurant Home">
                                <IoHome style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                                {isSidebarOpen && 'Home'}
                            </Link>
                        </li>
              
                        <li>
                            <Link to="/restaurant_dashboard" title='Restaurant Dashboard'>
                            <IoPerson style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                            {isSidebarOpen && 'Dashboard'}
                            </Link>
                        </li>
                    </ul>

                <p className='menu-label' style={{ display: isSidebarOpen ? 'block' : 'none' }}> Orders </p>
                    <ul className='menu-list'>
                        <li>
                            <Link to="/restaurant_all_orders" title='Restaurant All Orders'>
                            <IoListOutline style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                            {isSidebarOpen && 'All Orders'}
                            </Link>
                        </li>

                        <li>
                            <Link to="/restaurant_order" title='Restaurant Add Order'>
                            <IoFastFoodOutline style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                            {isSidebarOpen && 'Order'}
                            </Link>
                        </li>

                        <li>
                            <Link to="/restaurant_incoming_orders" title='Restaurant Incoming Orders'>
                            <IoWalkOutline style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                            {isSidebarOpen && 'Incoming Orders'}
                            </Link>
                        </li>
                    </ul>
            </nav>
        </aside>
        </div>
    </section>
  );
};

export default SidebarRestaurant_1;
