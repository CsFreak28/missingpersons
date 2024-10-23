import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

function LandingPage({ sampleData }) {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const [missingPersons, setMissingPersons] = useState([]);

  useEffect(() => {
    console.log("this is sam", sampleData);
    // Retrieve profiles from localStorage
    const storedProfiles =
      JSON.parse(localStorage.getItem("missingPersons")) || [];

    // Combine sample data with stored profiles
    const combinedProfiles = [...sampleData, ...storedProfiles];

    // Set combined profiles to state
    setMissingPersons(combinedProfiles);

    // Hero Section Animation
    gsap.to(headerRef.current, {
      opacity: 1,
      y: -50,
      duration: 1.5,
      ease: "power2.out",
    });
  }, [headerRef.current, sampleData]);

  return (
    <div className="App">
      <header ref={headerRef} className="Hero-section">
        <h1>Bringing Loved Ones Home</h1>
        <h2>Uniting Families Across the Globe</h2>
        <button id="search">Search for a Missing Person</button>
        <Link to={"/createProfile"}>
          <button>Report a Missing Person</button>
        </Link>
      </header>

      <section className="Missing-people-grid">
        <h3>
          Help Us Find Them <span className="please">(please)</span>
        </h3>
        <div ref={gridRef} className="grid-container">
          {missingPersons.map((person, index) => {
            const days = parseInt(
              person.howLong ? person.howLong.split(" ")[0] : 0
            );
            const isOverdue = days > 14;
            return (
              <div key={index} className="profile-card">
                <img src={person.imageUrl || person.photo} alt={person.name} />
                <div className="howLong">
                  <div className={`howLongInner ${isOverdue ? "overdue" : ""}`}>
                    {person.howLong || "Recently"}
                  </div>
                </div>
                <h4>{person.name}</h4>
                <p>{person.gender}</p>
                <p>Last seen: {person.lastSeen}</p>
                <Link to={`/person/${index + 1}`}>
                  <button>More Details about {person.name}</button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <footer className="footer">
        <p>
          &copy; 2024 Automated Welfare Dues Management System. All Rights
          Reserved. <br />
          <span className="bigText">Product of Tochukwu Ohaegbulam</span>
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
