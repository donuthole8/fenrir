import React, { useState, useEffect, useRef } from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'
import { Link } from "react-router-dom"


const ErrorText = () => (
  <p className="App-error-text">geolocation IS NOT available</p>
);

function Home() {
  const [isAvailable, setAvailable] = useState(false);
  const [position, setPosition] = useState({
    latitude: 35.669220,
    longitude: 139.761457
  });
  const isFirstRef = useRef(true);
  const [selectedVal, setSelectedVal] = useState(0)

  useEffect(() => {
    isFirstRef.current = false;
    if ('geolocation' in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  };

  const handleChange = (event) => {
    setSelectedVal(event.target.value)
  }

  if (isFirstRef.current) return <div className="App">Loading...</div>;

  return (
    <>
      <Header />

      <div className="location-wrapper">
        <div>
          {!isFirstRef && !isAvailable && <ErrorText />}
          {isAvailable && (
            <div>
              <button onClick={getCurrentPosition}>現在地の取得</button>
              <div>
                経度: { position.latitude }
                <br />
                緯度: { position.longitude }
              </div>
            </div>
          )}

          <p>現在地：静岡県浜松市中区城北</p>
        </div>
      </div>

      <div className="search-radius-wapper">
        <div className="search-radius-form">
          <form>
            <label>
              探索半径
            </label>

            <select name="radius" onChange={ handleChange }>
            <option value="3">1000m以内</option>
            <option value="1">300m以内</option>
            <option value="2">500m以内</option>
            <option value="4">2000m以内</option>
            <option value="5">3000m以内</option>
            </select>

            <div className="saerch-button-wrapper">

              <Link to= {{
                pathname: "/restaurants",
                state: {
                  latitude: position.latitude,
                  longitude: position.longitude,
                  radius: selectedVal
                }
              }}>検索</Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home

