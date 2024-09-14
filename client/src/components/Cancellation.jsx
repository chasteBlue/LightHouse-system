import React from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';

const Cancellation = () =>{
    return(
        <section className='section-m1'>
            <div className="contact-hero-image">
                <div className="text-content-title">
                    <h1 className='title'>Cancellation Policy</h1>
                </div>
            </div>

            <div className='terms-space'>
                <article>
                    <ol >
                        <li>
                            <strong>Policy</strong>
                            <p>Please be aware that all payments made are strictly non-refundable. This policy applies to all types of payments, including but not limited to the downpayment required to secure a reservation. Once a payment is made, regardless of the amount or purpose, it cannot be refunded
                            </p>
                        </li>


                    </ol>
                </article>
            </div>
        </section>

    );

};

export default Cancellation;