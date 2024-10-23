import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LandingPage from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReportMissingPerson from "./createMissingPersonProfile";
import PersonDetails from "./profile";
import firstImg from "./assets/images/firstMan.jpg";
import secondImg from "./assets/images/woman.jpg";
import thirdImg from "./assets/images/secondMan.jpg";
import fourthImg from "./assets/images/fourthImg.jpg";
const App = () => {
  const [missingPersons, setMissingPersons] = useState([]);

  const sampleData = [
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
  ];

  useEffect(() => {
    // Retrieve profiles from localStorage
    const storedProfiles =
      JSON.parse(localStorage.getItem("missingPersons")) || [];
    setMissingPersons([...sampleData, ...storedProfiles]);
  }, []);

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <LandingPage sampleData={missingPersons} />,
        },
        {
          path: "/createProfile",
          element: <ReportMissingPerson />,
        },
        {
          path: "/person/:id",
          element: <PersonDetails profiles={missingPersons} />,
        },
      ])}
    />
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Performance measurement
reportWebVitals();
