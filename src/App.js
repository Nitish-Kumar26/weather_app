import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const navigateToForecast = () => {
    navigate("/weather");
  };

  return (
    <div>
      <h1>Weather Monitoring App</h1>
      <button onClick={navigateToForecast}>Click to Enter City</button>
    </div>
  );
}

export default App;
