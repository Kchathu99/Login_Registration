import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem("token");

    // Parse the token to extract user information
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        setUserEmail(decodedToken.email);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/')

    // window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Details</h1>
        <div>
          <p>User Email: {userEmail}</p>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Main;
