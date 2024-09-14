import React from 'react';
import 'bulma/css/bulma.min.css';
import './layouts.css';
import '../App.css';

const Breadcrumbs = ({ items }) => {
  return (
    <div className="breadcrumbs">
      {items.map((item, index) => (
        <div className="breadcrumb-item" key={index}>
          {item.link ? (
            <a href={item.link}>{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
          {index < items.length - 1 && <span className="breadcrumb-separator">/</span>}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
