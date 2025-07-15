import React from 'react';
import IncrementalCounter from "./Counter.jsx";
import InfiniteScroll from './InfiniteScroll.jsx';
import InstaLike from './Like.jsx'; 
import "./instalike.css";


function App() {
  const sectionStyle = {
    background: "#f9f9f9",
    padding: "20px",
    marginBottom: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>🚀 Project 3 Showcase</h1>

      <div style={sectionStyle}>
        <h2 style={{ textAlign: "center" }}>🔢 Incremental Counter</h2>
        <IncrementalCounter />
      </div>

      <div style={sectionStyle}>
        <h2 style={{ textAlign: "center" }}>🔄 Infinite Scroll</h2>
        <InfiniteScroll />
      </div>

      <div style={sectionStyle}>
        <h2 style={{ textAlign: "center" }}>❤️ Instagram Like Effect</h2>
        <InstaLike />
      </div>
    </div>
  );
}

export default App;
