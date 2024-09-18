import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import { IoWarningOutline } from 'react-icons/io5';

function ErrorMsg() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  // Progress bar and hiding the message after 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
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
        <p className="ml-3">This is an error message. Please check the details!</p>
      </div>
      <progress className="progress is-danger mt-2" value={progress} max="100">
        {progress}%
      </progress>
    </div>
  );
}

export default ErrorMsg;
