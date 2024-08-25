import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHome, IoPerson, IoChevronBack, IoChevronForward, IoPeople, IoBed, IoFastFood, IoWalk, IoBag, IoWine, IoLocate } from 'react-icons/io5';
import 'bulma/css/bulma.min.css';
import './layouts.css';
import '../App.css';

const SidebarManager = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className='section-p1 side-color'>
      <div className="columns" >
        {/* Sidebar */}
        <aside className='aside-space' style={{ transition: 'width 0.3s', position: 'relative' }}>
          {/* Floating Toggle Button */}
          <button 
            className={`button is-blue button-float button-aside ${isSidebarOpen ? 'hide-toggle' : ''}`}
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
            }}
          >
            {isSidebarOpen ? <IoChevronBack /> : <IoChevronForward />}
          </button>

          <nav className="menu">
            {/* Menu List */}
            <p className="subtitle" style={{ display: isSidebarOpen ? 'block' : 'none', paddingTop: '50px' }}>
              Manager</p>
            
            <p className="menu-label" style={{ display: isSidebarOpen ? 'block' : 'none' }}>
              General
            </p>
            <ul className="menu-list">
              <li>
                <Link to="/manager_home">
                  <IoHome style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                  {isSidebarOpen && 'Home'}
                </Link>
              </li>
              <li>
                <a>
                  <IoPerson style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                  {isSidebarOpen && 'Dashboard'}
                </a>
              </li>
            </ul>

            <p className="menu-label" style={{ display: isSidebarOpen ? 'block' : 'none' }}>
              Accounts
            </p>
            <ul className="menu-list">
              <li>
                <Link to="/manager_accounts">
                  <IoPeople style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                  {isSidebarOpen && 'Staff Accounts'}
                </Link>
              </li>
            </ul>

            <p className="menu-label" style={{ display: isSidebarOpen ? 'block' : 'none' }}>
              Room Maintenance
            </p>
            <ul className="menu-list">
              <li>
                <a>
                  <IoBed style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                  {isSidebarOpen && 'Rooms'}
                </a>
              </li>
            </ul>

            <p className="menu-label" style={{ display: isSidebarOpen ? 'block' : 'none' }}>
              Menu Maintenance
            </p>
            <ul className="menu-list">
              <li>
                <a>
                  <IoFastFood style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                  {isSidebarOpen && 'Food Menu'}
                </a>
              </li>
              <li>
                <a>
                  <IoWine style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                  {isSidebarOpen && 'Drink Menu'}
                </a>
              </li>
            </ul>

            <p className="menu-label" style={{ display: isSidebarOpen ? 'block' : 'none' }}>
              Additional Services Maintenance
            </p>
            <ul className="menu-list">
              <li>
                <a>
                  <IoWalk style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                  {isSidebarOpen && 'Concierge'}
                </a>
              </li>
              <li>
                <a>
                  <IoBag style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                  {isSidebarOpen && 'Laundry'}
                </a>
              </li>
            </ul>

            <p className="menu-label" style={{ display: isSidebarOpen ? 'block' : 'none' }}>
              Event Maintenance
            </p>
            <ul className="menu-list">
              <li>
                <a>
                  <IoLocate style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                  {isSidebarOpen && 'Venue Package'}
                </a>
              </li>
              <li>
                <a>
                  <IoFastFood style={{ marginRight: isSidebarOpen ? '5px' : '0', textAlign: 'center' }} />
                  {isSidebarOpen && 'Food Package'}
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </section>
  );
};

export default SidebarManager;
