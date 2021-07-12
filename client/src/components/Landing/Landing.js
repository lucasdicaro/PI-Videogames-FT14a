
import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="bg-go">
        <h3>Welcome to the greatest VideogamesApp!!!</h3>
            <h2>Created by: Lucas Di Caro</h2>
      <Link to="/home">
        <button className="btn-grad"> GET STARTED </button>
      </Link>
    </div>
  );
}

export default Landing;
