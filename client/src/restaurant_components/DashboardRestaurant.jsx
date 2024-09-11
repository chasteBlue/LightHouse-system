import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import '../App.css';
import './components_r.css';
import { IoPerson} from 'react-icons/io5';
import { ResponsiveBar } from '@nivo/bar';



const DashboardRestaurant = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const formatDateTime = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      return date.toLocaleDateString('en-US', options);
    }; 

    const data = [
        { service: 'Staffs', quantity: 120 },
        { service: 'Rooms', quantity: 85 },
        { service: 'Food', quantity: 200 },
        { service: 'Drinks', quantity: 150 },
        { service: 'Laundry', quantity: 70 },
        { service: 'Concierge', quantity: 50 },
        { service: 'Venue', quantity: 40 },
        { service: 'Food Package', quantity: 180 },
      ];
      
  
  return (
    <section className='section-p1'>
        <div className="container has-background-light p-5">
            <div className="columns is-vcentered">
                <div className="column is-half">
                    <div className="notification is-white">
                        <h1 className="title is-4">Hello, ADMIN!</h1>
                        <p className="subtitle">Welcome to the Manager Dashboard.</p>
                    </div>
                </div>
                <div className="column is-half has-text-right">
                    <div className="box">
                        <p className="title is-5">{formatDateTime(currentDateTime)}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='columns is-vcentered'>
            <div className="column is-one-half">
                <div className="columns is-multiline" style={{ margin: '2%' }}>
                    <div className="column is-6">
                        <div className="box is-flex is-flex-direction-row is-flex-direction-column-mobile" style={{ padding: '1rem' }}>
                            <div className="is-flex is-justify-content-center is-align-items-center" style={{ flex: '1 1 50%', overflow: 'hidden' }} >
                                <span>
                                    <IoPerson size={40} className="is-violet" />
                                </span>
                            </div>
                            <div className="ml-3" style={{ flex: '1 1 50%', overflow: 'hidden', textAlign: 'center' }}>
                                <label className="has-text-weight-semibold">Staffs</label>
                                <p className="is-size-5 has-text-primary">123</p>
                            </div>
                        </div>
                    </div>

                    <div className="column is-6">
                        <div className="box is-flex is-flex-direction-row is-flex-direction-column-mobile" style={{ padding: '1rem' }}>
                            <div className="is-flex is-justify-content-center is-align-items-center"  style={{ flex: '1 1 50%', overflow: 'hidden' }} >
                                <span>
                                    <IoPerson size={40} className="is-violet" />
                                </span>
                            </div>
                            <div className="ml-3" style={{ flex: '1 1 50%', overflow: 'hidden', textAlign: 'center' }}>
                                <label className="has-text-weight-semibold">Rooms</label>
                                <p className="is-size-5 has-text-primary">123</p>
                            </div>
                        </div>
                    </div>

                    <div className="column is-6">
                        <div className="box is-flex is-flex-direction-row is-flex-direction-column-mobile" style={{ padding: '1rem' }}>  
                            <div className="is-flex is-justify-content-center is-align-items-center" style={{ flex: '1 1 50%', overflow: 'hidden' }} >
                                <span>
                                    <IoPerson size={40} className="is-violet" />
                                </span>
                            </div>                     
                            <div className="ml-3" style={{ flex: '1 1 50%', overflow: 'hidden', textAlign: 'center' }}>
                                <label className="has-text-weight-semibold">Foods</label>
                                <p className="is-size-5 has-text-primary">123</p>
                            </div>
                        </div>
                    </div>

                    <div className="column is-6">
                        <div className="box is-flex is-flex-direction-row is-flex-direction-column-mobile" style={{ padding: '1rem' }}>
                        
                            <div className="is-flex is-justify-content-center is-align-items-center" style={{ flex: '1 1 50%', overflow: 'hidden' }}>
                                <span>
                                    <IoPerson size={40} className="is-violet" />
                                </span>
                            </div>
                            <div className="ml-3" style={{ flex: '1 1 50%', overflow: 'hidden', textAlign: 'center' }}>
                                <label className="has-text-weight-semibold">Drinks</label>
                                <p className="is-size-5 has-text-primary">123</p>
                            </div>
                        </div>
                    </div>

                    <div className="column is-6">
                        <div className="box is-flex is-flex-direction-row is-flex-direction-column-mobile" style={{ padding: '1rem' }}>                     
                            <div className="is-flex is-justify-content-center is-align-items-center" style={{ flex: '1 1 50%', overflow: 'hidden' }}>
                                <span>
                                    <IoPerson size={40} className="is-violet" />
                                </span>
                            </div>
                            <div className="ml-3" style={{ flex: '1 1 50%', overflow: 'hidden', textAlign: 'center' }}>
                                <label className="has-text-weight-semibold">Concierges</label>
                                <p className="is-size-5 has-text-primary">123</p>
                            </div>
                        </div>
                    </div>

                    <div className="column is-6">
                        <div className="box is-flex is-flex-direction-row is-flex-direction-column-mobile" style={{ padding: '1rem' }}>                     
                            <div className="is-flex is-justify-content-center is-align-items-center" style={{ flex: '1 1 50%', overflow: 'hidden' }}>
                                <span>
                                    <IoPerson size={40} className="is-violet" />
                                </span>
                            </div>
                            <div className="ml-3" style={{ flex: '1 1 50%', overflow: 'hidden', textAlign: 'center' }}>
                                <label className="has-text-weight-semibold">Laundry</label>
                                <p className="is-size-5 has-text-primary">123</p>
                            </div>
                        </div>
                    </div>

                    <div className="column is-6">
                        <div className="box is-flex is-flex-direction-row is-flex-direction-column-mobile" style={{ padding: '1rem' }}>                     
                            <div className="is-flex is-justify-content-center is-align-items-center" style={{ flex: '1 1 50%', overflow: 'hidden' }}>
                                <span>
                                    <IoPerson size={40} className="is-violet" />
                                </span>
                            </div>
                            <div className="ml-3" style={{ flex: '1 1 50%', overflow: 'hidden', textAlign: 'center' }}>
                                <label className="has-text-weight-semibold">Venues</label>
                                <p className="is-size-5 has-text-primary">123</p>
                            </div>
                        </div>
                    </div>

                    <div className="column is-6">
                        <div className="box is-flex is-flex-direction-row is-flex-direction-column-mobile" style={{ padding: '1rem' }}>                     
                            <div className="is-flex is-justify-content-center is-align-items-center" style={{ flex: '1 1 50%', overflow: 'hidden' }}>
                                <span>
                                    <IoPerson size={40} className="is-violet" />
                                </span>
                            </div>
                            <div className="ml-3" style={{ flex: '1 1 50%', overflow: 'hidden', textAlign: 'center' }}>
                                <label className="has-text-weight-semibold">Food Packages</label>
                                <p className="is-size-5 has-text-primary">123</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className="column is-one-half chart-container" >
            <div className="column" style={{ height: '400px' }}>
            <ResponsiveBar
                data={data}
                keys={['quantity']} 
                indexBy="service" 
                margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
                colors={['#abdbe3']}
                padding={0.3}
                axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Service',
                legendPosition: 'middle',
                legendOffset: 32,
                }}
                axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Quantity',
                legendPosition: 'middle',
                legendOffset: -40,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            />
            </div>
                
            </div>

            
        </div>
    
        

    </section>
  );
};

export default DashboardRestaurant ;
