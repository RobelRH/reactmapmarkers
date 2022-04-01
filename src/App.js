import React from 'react'
import './App.css'
import Map from './Map'

function App() {

  console.log("api key", process.env.MAP_ID)

  return (
    <>
      <div id="mapContainer">
            <Map />
      </div>
    </>
  )
}

export default App