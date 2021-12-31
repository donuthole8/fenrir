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
    console.log("--getCurrentP--")
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
      console.log(position)
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

          <p>現在地： 静岡県浜松市中区城北</p>
          {/* テスト値：lat=35.669220,lng=139.761457 */}
          {/* 現在地：lat=34.7205309,lng=137.7218217 */}
          {/* https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c64ae792fe1b1ca3&lat=34.7205309&lng=137.7218217&format=json */}
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

              <Link to="/restaurants">検索</Link>
              {/* <Link to={{
                pathname: "/restaurants",
                state: { radius: radius }
              }}>検索</Link> */}

              {/* <button onClick={this.handleClik}>検索</button> */}
            </div>

            {/* <div className="saerch-button-wrapper">
              <input type="submit" value="検索" />
            </div> */}
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home

