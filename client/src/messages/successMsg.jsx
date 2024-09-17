import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

function SuccessMsg() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

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

  if (!visible) return null; // Hide the component when not visible

  return (
    <div className="notification is-flex is-align-items-start is-flex-direction-column">
      <div className="is-flex is-align-items-start">
        <span>
          <IoCheckmarkCircleOutline size="24px" />
        </span>
        <p className="ml-3">This is an success message. Please check the details!</p>
      </div>
      <progress className="progress is-success mt-2" value={progress} max="100">
        {progress}%
      </progress>
    </div>
  );
}

export default SuccessMsg;
