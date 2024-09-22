import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

function SuccessMsg({ message, duration = 5000 }) { 
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 20) {
          clearInterval(interval);
          setVisible(false);
          return 100;
        }
        return oldProgress + 100 / (duration / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration]);

  if (!visible) return null; 

  return (
    <div className="notification is-flex is-align-items-start is-flex-direction-column">
      <div className="is-flex is-align-items-start">
        <span>
          <IoCheckmarkCircleOutline size="24px" />
        </span>
        <p className="ml-3">{message}</p> {/* Display the message prop */}
      </div>
      <progress className="progress is-success mt-2" value={progress} max="20">
        {Math.round(progress)}%
      </progress>
    </div>
  );
}

export default SuccessMsg;
