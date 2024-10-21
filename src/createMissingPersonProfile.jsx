import React, { useState } from "react";
import "./createMissingProfile.css"; // Import CSS for styling
import ConfirmationPopup from "./confirmationPopup";

const ReportMissingPerson = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    lastSeenLocation: "",
    dateLastSeen: "",
    contactInfo: "",
    photo: null,
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // Read the file as a base64 string
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result, // Base64 encoded image
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/createMissingPersonProfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Show the confirmation popup
        setShowPopup(true);
      } else {
        console.error("Error submitting form", await response.json());
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="report-missing-person-page">
      <h1>Report a Missing Person</h1>
      <form onSubmit={handleSubmit} className="report-form">
        <div className="form-group">
          <label htmlFor="name">Name of Missing Person</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="lastSeenLocation">Last Seen Location</label>
          <input
            type="text"
            id="lastSeenLocation"
            name="lastSeenLocation"
            value={formData.lastSeenLocation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateLastSeen">Date Last Seen</label>
          <input
            type="date"
            id="dateLastSeen"
            name="dateLastSeen"
            value={formData.dateLastSeen}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactInfo">Your Contact Information</label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Upload a Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Report
        </button>
      </form>
      {showPopup && (
        <ConfirmationPopup
          message="Your report has been submitted successfully!"
          missingPersonsName={formData.name}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ReportMissingPerson;
