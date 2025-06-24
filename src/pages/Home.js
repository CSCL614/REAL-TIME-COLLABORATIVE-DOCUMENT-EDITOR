import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to Collaborative Editor</h2>
      <Link to="/document">
        <button className="btn btn-success">Start Editing</button>
      </Link>
    </div>
  );
};

export default Home;
