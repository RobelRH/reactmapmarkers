import React from 'react'
import { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'

function MapComponent() {

    const [selectedHouse, setSelectedHouse] = useState(null)

    const houses = [
        ["john", "doe", "+128793798", "BL-361", 40.911287842568676, -74.55786960613551],
        ["albert", "doe", "+209829034", "Ks-564", 40.921665323995285, -74.44388646206713],
        ["jane", "doe", "+203899384", "F-670", 40.76791227768853, -74.33127660889114],
        ["chris", "doe", "+948798298", "BL-078", 40.5981635598961, -74.33127660889114]
    ]

    return (
        <>
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 40.59, lng: -74.33 }}
            >
                {
                    houses.map((house) => (
                        <div key={house[0]}>
                            <Marker
                                key={house[0]}
                                position={{ lat: house[4], lng: house[5] }}
                                onClick={() => setSelectedHouse(house)}
                            />
                        </div>
                    ))
                }

                {
                    selectedHouse && (
                        <InfoWindow
                            position={{ lat: selectedHouse[4], lng: selectedHouse[5] }}
                            onCloseClick={() => setSelectedHouse(null)}
                        >
                            <div id="content">
                                <h2>{selectedHouse[0] + ' ' + selectedHouse[1]}</h2>
                                <h3>{selectedHouse[2]}</h3> +
                                <div>
                                    <p><b>House Number : {selectedHouse[3]} </b></p>  +
                                    <p><b>user profile</b>, <a href={`http://localhost:3000/users/${selectedHouse[0]}`} target="_blank">user profile link</a> </p>
                                </div>
                            </div>
                        </InfoWindow>
                    )
                }

            </GoogleMap>
        </>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent))

function Map() {
  return (
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&map_ids=${process.env.API_KEY}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
  )
}

export default Map