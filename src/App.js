import React, { useState, useEffect } from "react";
import Slide from "./Slide";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tabSlide, setTabSlide] = useState([]);
  const [tabBody, setTabBody] = useState(0);

  const fetchTabSlide = async () => {
    try {
      const response = await fetch(url);
      const slide = await response.json();
      setLoading(false);
      setLoading(slide);
      console.log(slide);
    } catch (error) {
      setLoading(false);
    }
  };
  console.log();
  useEffect(() => {
    fetchTabSlide();
  }, []);

  if (loading) {
    return (
      <section>
        <div className="loading-container">
          <h1 className="loading">loading...</h1>
          </div>
      </section>
    );
  }
  return (
      <section className="section">
        <div className="heading">
          <h1>experience</h1>
        </div>
        
       <Slide/>
      </section>
  );
};

export default App;
