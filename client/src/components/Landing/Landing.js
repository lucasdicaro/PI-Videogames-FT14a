import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="titles">
        <h3>Welcome to the greatest VideogamesApp!!!</h3>
            <h4>Created by: Lucas Di Caro</h4>
      <Link to="/home">
        <button className="button"> GET STARTED </button>
      </Link>
    </div>
  );
}

export default Landing;
