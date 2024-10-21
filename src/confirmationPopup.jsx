import React from "react";

function ConfirmationPopup({ message, onClose, missingPersonsName }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{message}</h2>
        <p>
          We will frequently contact you using the details you provided to
          update you on {missingPersonsName}'s' whereabouts
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
