import React, { useEffect, useRef } from "react";
import "./App.css";
import firstImg from "./assets/images/firstMan.jpg";
import secondImg from "./assets/images/woman.jpg";
import thirdImg from "./assets/images/secondMan.jpg";
import fourthImg from "./assets/images/fourthImg.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
// gsap.registerPlugin(ScrollTrigger);
function App() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const missingPersons = [
    // Sample data
    {
      id: 1,
      name: "John Doe",
      gender: "Male",
      lastSeen: "Central Park, NY, 09/01/2024",
      imageUrl: thirdImg,
      howLong: "14 days ago",
    },
    {
      id: 2,
      name: "Sandra Goldberg",
      gender: "Male",
      lastSeen: "Central Park, NY, 09/01/2024",
      imageUrl: secondImg,
      howLong: "33 days ago",
    },
    {
      id: 3,
      name: "John Doe",
      gender: "Male",
      lastSeen: "Central Park, NY, 09/01/2024",
      imageUrl: firstImg,
      howLong: "6 days ago",
    },
    {
      id: 4,
      name: "John Doe",
      gender: "Male",
      lastSeen: "Central Park, NY, 09/01/2024",
      imageUrl: fourthImg,
      howLong: "22 days ago",
    },
    // ... more profiles
  ];
  useEffect(() => {
    // Hero Section Animation
    console.log(headerRef.current);
    gsap.to(headerRef.current, {
      opacity: 1,
      y: -50,
      duration: 1.5,
      ease: "power2.out",
    });

    // Grid Section Animation
  }, [headerRef.current]);
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
          {missingPersons.map((person) => {
            const days = parseInt(person.howLong.split(" ")[0]);
            const isOverdue = days > 14;
            return (
              <div key={person.id} className="profile-card">
                <img src={person.imageUrl} alt={person.name} />
                <div className="howLong">
                  <div className={`howLongInner ${isOverdue ? "overdue" : ""}`}>
                    {person.howLong}
                  </div>
                </div>
                <h4>{person.name}</h4>
                <p>{person.gender}</p>
                <p>Last seen: {person.lastSeen}</p>
                <Link to={`/person/${person.id}`}>
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

export default App;
