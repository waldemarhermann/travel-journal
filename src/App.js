import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Card from './components/Card'
import data from './data'


function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.image}
        location={item.location}
        mapLink={item.mapLink}
        sight={item.sight}
        time={item.sight}
        descripe={item.describe}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
