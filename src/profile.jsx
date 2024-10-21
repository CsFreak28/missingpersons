import React from "react";
import { useParams } from "react-router-dom";
import "./PersonDetails.css";
import { FaShareAlt } from "react-icons/fa";
import firstImg from "./assets/images/firstMan.jpg";
import secondImg from "./assets/images/woman.jpg";
import thirdImg from "./assets/images/secondMan.jpg";
import fourthImg from "./assets/images/fourthImg.jpg";
function PersonDetails() {
  const { id } = useParams();
  const missingPersons = [
    // Sample data
    {
      id: 1,
      name: "John Doe",
      gender: "Male",
      lastSeen: "Central Park, NY, 09/01/2024",
      imageUrl: thirdImg,
      howLong: "14 days ago",
      contactInfo: "2349035579465",
      description:
        "John Doe was last seen on the evening of September 1, 2024, leaving his apartment in Central Park, NY. He was on his way to meet a friend for dinner but never arrived. John's phone was last tracked near the park entrance, and since then, there has been no further communication. His sudden disappearance has left his family and friends deeply concerned, and they are urging anyone with information to come forward.",
    },
    {
      id: 2,
      name: "Sandra Goldberg",
      gender: "Male",
      lastSeen: "Central Park, NY, 09/01/2024",
      imageUrl: secondImg,
      howLong: "33 days ago",
      contactInfo: "2349035579465",
      description:
        "John Doe was last seen on the evening of September 1, 2024, leaving his apartment in Central Park, NY. He was on his way to meet a friend for dinner but never arrived. John's phone was last tracked near the park entrance, and since then, there has been no further communication. His sudden disappearance has left his family and friends deeply concerned, and they are urging anyone with information to come forward.",
    },
    {
      id: 3,
      name: "John Doe",
      gender: "Male",
      lastSeen: "Central Park, NY, 09/01/2024",
      imageUrl: firstImg,
      howLong: "6 days ago",
      contactInfo: "2349035579465",
      description:
        "John Doe was last seen on the evening of September 1, 2024, leaving his apartment in Central Park, NY. He was on his way to meet a friend for dinner but never arrived. John's phone was last tracked near the park entrance, and since then, there has been no further communication. His sudden disappearance has left his family and friends deeply concerned, and they are urging anyone with information to come forward.",
    },
    {
      id: 4,
      name: "John Doe",
      gender: "Male",
      lastSeen: "Central Park, NY, 09/01/2024",
      imageUrl: fourthImg,
      howLong: "22 days ago",
      contactInfo: "2349035579465",
      description:
        "John Doe was last seen on the evening of September 1, 2024, leaving his apartment in Central Park, NY. He was on his way to meet a friend for dinner but never arrived. John's phone was last tracked near the park entrance, and since then, there has been no further communication. His sudden disappearance has left his family and friends deeply concerned, and they are urging anyone with information to come forward.",
    },
    // ... more profiles
  ];
  const person = missingPersons.find((p) => p.id === parseInt(id));

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <>
      <p className="title">{person.name}'s' Missing Profile</p>
      <div className="person-details-container">
        <div className="main-details">
          <img
            src={person.imageUrl}
            alt={person.name}
            className="person-image"
          />
          <div className="person-info">
            <h2>{person.name}</h2>
            <p>
              Gender: <span>{person.gender}</span>{" "}
            </p>
            <p>
              Last Seen: <span>{person.lastSeen}</span>{" "}
            </p>
            <p>
              Contact: <span>{person.contactInfo}</span>{" "}
            </p>
            <p className="description">{person.description} </p>
          </div>
        </div>

        <div className="additional-info">
          <div className="chat-section">
            <h3>Chat about this case</h3>
            <div className="chat-box">
              <div className="messages">
                {/* Sample messages */}
                <p>
                  <strong>John:</strong>{" "}
                  <span className="theMessage">
                    I think I saw him at the park the other day?
                  </span>
                </p>
                <p>
                  <strong>Jane:</strong>{" "}
                  <span className="theMessage">Any updates on this case?</span>
                </p>
                {/* More messages */}
              </div>
              <div className="messageInputs">
                <input
                  type="text"
                  placeholder="Type your comment..."
                  className="chat-input"
                />
                <button>send</button>
              </div>
            </div>
          </div>

          <div className="search-efforts">
            <div className="share-button">
              <button onClick={() => alert("Share this case!")}>
                <FaShareAlt /> Share
              </button>
            </div>
            <h3>Search Efforts</h3>
            <ul>
              {/* Sample search efforts */}
              <li>Flyers distributed in local areas.</li>
              <li>Search party organized in Central Park.</li>
              <li>Police notified and involved in the search.</li>
              {/* More efforts */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonDetails;
