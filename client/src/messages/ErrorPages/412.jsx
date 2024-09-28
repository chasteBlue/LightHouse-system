import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const Error412 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/restaurant_order'); // Navigate to the previous page
  };

  return (
    <section className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-danger">412</h1>
          <h2 className="subtitle is-3">Precondition Failed</h2>
          <p className="content is-size-5">
            No food items in the order. Cannot proceed.
            <br />
            Please add food items to your order before continuing.
          </p>
          <button className="button is-danger is-outlined" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error412;
