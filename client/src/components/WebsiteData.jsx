import React from 'react';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';

const WebsiteData = () =>{
    return(
        <section className='section-m1'>
            <div className="contact-hero-image">
                <div className="text-content-title">
                    <h1 className='title'>Website Data Policy</h1>
                </div>
            </div>

            <div className='terms-space'>
                <article>
                    <p className='mb-3'>Welcome to the Lighthouse Point Hotel System! As a valued user of our platform, your privacy and security are our top priorities. This Data Policy is designed to inform you about how we collect, use, share, and protect your personal information when you access and use our services. We are committed to maintaining the confidentiality and integrity of your data while providing a seamless and enriching experience. We encourage you to periodically review this Data Policy to understand how your information is handled and your rights before using our services.
                    </p>

                    <p className='mb-3'> The Hotel Management System’s data privacy practices are governed by our institution's overarching privacy policy. While the system serves its unique purpose, these guidelines are developed in accordance with the Data Privacy Act (DPA) of 2012, also known as Republic Act (RA) 10173. This law aims to "protect the fundamental human right of privacy and communication while ensuring the free flow of information to promote innovation and growth."
                    </p>

                    <p className='mb-3'>We handle a significant amount of information through collection, storage, processing, and transfer. We are dedicated to upholding the privacy rights of all individuals we interact with, in line with our mission to deliver exceptional service and uphold the highest standards of privacy. In alignment with the directives of the National Privacy Commission, the body overseeing the DPA, we are committed to protecting privacy rights while facilitating valuable and productive information exchange.
                    </p>

                    <ol >
                        <li>
                            <strong>Conditions of Use</strong>
                            <p>By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly. 
                            Lighthouse Point Hotel only grants use and access of this website, its products, and its services to those who have accepted its terms.</p>
                        </li>
                        <li>
                            <strong>Information We Collect</strong>
                            <p>The Data Processing System of the Lighthouse Point Hotel Management System is designed to enhance your experience by providing access to various services and resources. When you use our system, we collect the following types of information:
                            </p>
                            <p>Personal Information: When you register for an account or use our services, we collect personal information such as:
                            </p>
                            <ol className='data-web-list'>
                                <li>Full Name</li>
                                <li>Contact Number</li>
                                <li>Booking Details (e.g., Room Preferences)</li>
                                <li>Email Address</li>
                                <li>Username</li>
                                <li>Password</li>
                                <li>Any message or inquireies you send through the website</li>
                            </ol>
                        </li>
                        <li>
                            <strong>How We Use Your Information</strong>
                            <p>The Lighthouse Point Hotel Management System is committed to using the information we collect from users only for legitimate purposes, ensuring the confidentiality and integrity of your data at all times. We use your information in the following ways: </p>
                            <ol className='data-web-list'>
                                <li><strong>Personalization</strong>To tailor your experience on our platform, such as providing personalized recommendations based on your previous bookings.</li>
                                <li><strong>Communication</strong>To reach out to you with information regarding your account, updates to our services, or promotional offers.</li>
                                <li><strong>Analytics</strong>To use aggregated and anonymized data for improving our services, understanding user behavior, and conducting research.</li>
                            </ol>
                        </li>
                        <li>
                            <strong>Information Sharing</strong>
                                <p>The Hotel Management System adheres to strict legal standards when it comes to sharing, disclosing, and transferring personal data. Data sharing is typically limited to administrative, research, and statistical purposes. Examples include, but are not limited to:     </p>
                                <ol className='data-web-list'>
                                <li>Sharing personal information within the system for operational purposes, such as facilitating bookings or customer service.  </li>
                                <li>Sharing data for administrative functions, such as account management and resolving user inquiries.</li>
                                <li>Sharing data for research purposes aimed at improving our services or conducting market studies</li>
                                <li>Sharing data for statistical analysis to gain insights into customer preferences and trends.Sharing personal information with trusted third-party service providers who assist in delivering our services.</li>
                                <li>Complying with applicable laws, court orders, or government requests requiring data sharing.</li>
                                <li>Sharing information with explicit user consent for specific purposes outlined in this policy.Sharing information to enforce security measures, prevent fraud, or protect against unauthorized access to the system.</li>
                            </ol>
                        
                        </li>
                        <li>
                            <strong> Data Security</strong>
                                <p>The processing, management, and handling of data collected by the Hotel Management System adheres to our institution’s Data Privacy Policy and the Data Privacy Act of 2012 (RA 10173) of the Philippines.
                                </p>
                        </li>
                        <li>
                            <strong>Information Storage</strong>
                            <p>The Lighthouse Hotel Management System continues to enhance its digital infrastructure. Multiple departments may store similar information to ensure coordination and service continuity. Data is retained as long as required by law, and information that is temporarily needed will be securely disposed of once it is no longer necessary.
                            </p>
                        </li>
                        <li>
                            <strong>Inquiries, Feedback & Complaints</strong>
                            <p>If you believe your privacy has been compromised or have concerns about how your information is handled, please contact our Management Officer via email.
                            </p>
                            <p><strong>Email:</strong> golden.g.suites@gmail.com</p>
                        </li>
                    </ol>
                </article>
            </div>
        </section>

    );

};

export default WebsiteData;