import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import NewsGrid from "./NewsGrid";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { signOut } from "firebase/auth"; // Import signOut from firebase auth
import "./News.css";
import { auth } from "../../firebase"; // Adjust the path based on your project's file structure


function News() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("General");

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=" +
          category +
          "&apiKey=83acb2b34a6f4018837373bd4254356b"
      )
      .then((res) => {
        setItems(res.data.articles);
      })
      .catch((error) => console.error(error));
  }, [category]);

  const handleLogout = () => {
    // Perform logout action
    signOut(auth)
      .then(() => {
        navigate("/login"); // Redirect to login page after logout
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="App">
      <h1 className="title">See The Latest News</h1>
      <button className="logoutButton" onClick={handleLogout}>
        Logout
      </button>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}

export default News;
