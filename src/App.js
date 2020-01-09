import React from 'react';
import logo from './logo.svg';
import './App.css';
import imageInSrc from './imageInSrc.jpg';




function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }} >
        <h1 className="title red">My title</h1>
        <br />
        <img src={imageInSrc} />
        <br />
        <img src="imageInPublic.jpg" />
      </div>
    </div>
  );
}

export default App;
