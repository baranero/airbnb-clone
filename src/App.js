import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


function App() {
  const cards = data.map(item => {
    return (
      <Card
        key = {item.id}
        img = {item.coverImg}
        rating = {item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        country = {item.location}
        title = {item.title}
        price = {item.price}
        openSpots = {item.openSpots}
      />
  )})
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="cards--list">
        {cards}
      </div>
    </div>  

    /*
    <div className="App">
      <Navbar/>
      <Hero/>
       <Card
        img={Katie}
        rating="5.0"
        reviewCount="(6)"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      /> 
    </div> */

  );
}

export default App;
