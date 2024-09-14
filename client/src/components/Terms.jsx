import React from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';

const Terms = () =>{
    return(
        <section className='section-m1'>
            <div className="contact-hero-image">
                <div className="text-content-title">
                    <h1 className='title'>Terms and Conditions</h1>
                </div>
            </div>

            <div className='terms-space'>
                <article>
                    <ol >
                        <li>
                            <strong>Chcek-in Payment</strong>
                            <p>Payment upon check-in should be paid in full. All payments made are strictly non-refundable. 
                                Check-in time is 2:00 PM and check-out time is until 12:00 NN only. Guests who check-in early will be charged with an additional fee. 
                                Guests who fail to check-out 30 mins after the alloted time will be charged with half the day.</p>
                        </li>
                        <li>
                            <strong>Entering Policy</strong>
                            <p>Guests not included in the registration are not allowed to enter rooms without the permission of the establishment and shall incur a fee should they stay beyond 9 PM. Guests are strictly obligated to follow company policies for the safety and welfare of all shareholders.
                            </p>
                        </li>
                        <li>
                            <strong>Damage Policy</strong>
                            <p>Guests will be charged for any property loss or damage to Lighthouse Point caused by themselves, their friends or any person for whom they are responsible. Hotel Management is not responsible for your personal belongings and valuables like money, jewelry or any other valuables left by the guests in the rooms. Hotel Management is not responsible for any personal injury, harm or accident that occurs within the premises of the establishment
                            </p>
                        </li>
                    </ol>
                </article>
            </div>
        </section>

    );

};

export default Terms;