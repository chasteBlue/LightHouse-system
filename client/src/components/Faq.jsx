import React, { useState } from 'react';
import { IoHelpCircleOutline } from 'react-icons/io5';
import 'bulma/css/bulma.min.css';
import './pages.css';
import '../App.css';

const Faq = () => {
  const [selectedCategory, setSelectedCategory] = useState('General Questions');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = {
    'General Questions': [
      { question: 'What time is check-in/ check-out?', answer: 'The check-in time is 2:00 PM and check-out time is until 12:00 NN only.' },
      { question: 'Do you provide shuttle services?', answer: 'Yes, we provide shuttle services upon request.' },
      { question: 'Can I store my luggage?', answer: 'Guests can store their luggage at the front desk, where they will need to sign a document and have their bags tagged.' },
      { question: 'Is the hotel near the city center/attractions?', answer: 'Lighthouse Point Hotel is conveniently located near the metro city, placing all of the city\'s major attractions just a short ride away. This prime location allows guests to easily access popular destinations and enjoy the vibrant offerings of the city.' },
      { question: 'Is breakfast included in the room rate?', answer: 'The guest has the option to include breakfast as part of their stay, in which case the cost will be added to the room rate. Alternatively, they may choose to forgo breakfast, and it will not be included in the room rate.' },
    ],
    'Services': [
      { question: 'Are there any restaurants or bars on-site?', answer: 'Yes, guests can enjoy the on-site bar and restaurant, which are located on the top floor.' },
      { question: 'Are there laundry services available?', answer: 'Yes, the hotel provides a laundry service for its guests.' },
    ],
    'Hotel Queries': [
      {
        question: 'What are the list of available rooms and rates here?',
        answer: [
          'Premier Cabin - 3,100.00',
          'Family Cabin 1 - 3,800.00',
          'Family Cabin 2 - 3,500.00',
          'Standard King Cabin - 2,800.00',
          'Standard Queen Cabin - 2,500.00',
          'Pocket Queen Cabin - 2,100.00',
          'Triple Cabin - 2,500.00',
          'Twin Cabin - 2,100.00',
          'Single Cabin - 1,650.00'
        ],
      },
      {
        question: 'What are the list of available hotel facilities?',
        answer: [
          'Frontdesk [24 hour]',
          'Shuttle Service',
          'Airport Transfer',
          'Swimming pool [outdoor]',
          'Car Park',
          'Golf course [on site]',
          'Restaurant - 3rd Floor',
          'Bar - 3rd Floor',
        ],
      },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleQuestionClick = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index); 
  };

  return (
    <section className='section-m1'>
      <div className="contact-hero-image">
        <div className="text-content-title">
          <h1 className='title'>Frequently Asked Questions</h1>
          <h3 className='subtitle'>Need help? We’re here for you!</h3>
        </div>
      </div>

      <div className='faq-column'>
        <div className="columns">
          <aside className="menu column is-one-quarter">
            <h2 className='title'>Categories</h2>
            <ul className="menu-list">
              {Object.keys(faqData).map((category) => (
                <li key={category}>
                  <a 
                    href='#' 
                    onClick={() => handleCategoryClick(category)} 
                    className={selectedCategory === category ? 'is-active' : ''}
                    style={{ display: 'flex', alignItems: 'center' }} // Flexbox for centering
                  >
                    <IoHelpCircleOutline style={{ fontSize: '1.5rem', marginRight: '8px' }} />
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="column">
            {selectedCategory && (
              <div className="content">
                <h2 className='subtitle'>{selectedCategory}</h2>
                {faqData[selectedCategory].map((item, index) => (
                  <div key={index} className="box">
                    <a onClick={() => handleQuestionClick(index)}>
                      <h4 className="question-title">{item.question}</h4>
                    </a>
                    {activeQuestion === index && (
                      <div className="answer">
                        {Array.isArray(item.answer) ? (
                          <ul className="faq-list">
                            {item.answer.map((detail, idx) => (
                              <li key={idx}>{detail}</li>
                            ))}
                          </ul>
                        ) : (
                          <p>{item.answer}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
