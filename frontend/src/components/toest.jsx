import React, { useState, useEffect } from 'react';

const Toast = ({ message, show }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    console.log("toest")
    // Automatically hide the toast after 3 seconds (adjust as needed)
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <div className={`fixed bottom-0 right-[40%] m-4 bg-green-500 text-white p-4 rounded ${isVisible ? '' : 'hidden'}`}>
      {message}
    </div>
  );
};

export default Toast;
