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
      { question: 'What is your return policy?', answer: 'Our return policy lasts 30 days...' },
      { question: 'Do you offer international shipping?', answer: 'Yes, we ship to over 100 countries...' },
    ],
    'Billing Issues': [
      { question: 'How do I update my billing information?', answer: 'To update your billing information...' },
      { question: 'Why was my payment declined?', answer: 'There could be several reasons for a declined payment...' },
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
                        <p>{item.answer}</p>
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
