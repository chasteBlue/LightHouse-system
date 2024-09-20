import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import { IoWarningOutline } from 'react-icons/io5';

function ErrorMsg({ message }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 30) {
          clearInterval(interval);
          setVisible(false); // Hide the error message after 10 seconds
          return oldProgress;
        }
        return oldProgress + 1; // Increase progress by 1% every 100ms (10 seconds total)
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="notification is-flex is-align-items-start is-flex-direction-column">
      <div className="is-flex is-align-items-start">
        <span>
          <IoWarningOutline size="24px" />
        </span>
        <p className="ml-3">{message}</p>
      </div>
      <progress className="progress is-danger mt-2" value={progress} max="20">
        {progress}%
      </progress>
    </div>
  );
}

export default ErrorMsg;
