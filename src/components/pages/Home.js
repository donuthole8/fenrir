import React, { useState, useEffect, useRef } from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'
import { Link } from "react-router-dom";

const ErrorText = () => (
  <p className="App-error-text">geolocation IS NOT available</p>
);

function Home() {
  const [isAvailable, setAvailable] = useState(false);
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const isFirstRef = useRef(true);

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
          {/* 現在地：lat=34.7205309,lng=137.7218217 */}
        </div>
      </div>

      <div className="search-radius-wapper">
        <div className="search-radius-form">
          <form>
            <label>
              探索半径
            </label>

            <select name="radius">
            <option value="3">1000m以内</option>
            <option value="1">300m以内</option>
            <option value="2">500m以内</option>
            <option value="4">2000m以内</option>
            <option value="5">3000m以内</option>
            </select>

            <div className="saerch-button-wrapper">

              <Link to= {{
                pathname: "/restaurants",
                // state: position
                // テスト用
                state: { latitude: 34.7205309, longitude: 137.7218217 }
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

