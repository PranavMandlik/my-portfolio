import React from "react";
 // Optional: Add your own styling here

const ConnectWithMeButton = () => {
  const handleConnectClick = () => {
    // Open Mailchimp form in new tab
    window.open("http://eepurl.com/jcWuvs", "_blank");

    // Open default email client
    window.location.href = "mailto:mandlikpranav29@gmail.com?subject=Let's Connect!";
  };

  return (
    <div className="connect-with-me-container">
      <button className="connect-btn" onClick={handleConnectClick}>
        Submit
      </button>
    </div>
  );
};

export default ConnectWithMeButton;