import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

const Error401 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <section className="hero is-fullheight is-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1 has-text-danger">401</h1>
          <h2 className="subtitle is-3">Unauthorized Access</h2>
          <p className="content is-size-5">
            You do not have the necessary permissions to access this page.
            <br />
            Please check your credentials or contact your administrator.
          </p>
          <button className="button is-danger is-outlined" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error401;
