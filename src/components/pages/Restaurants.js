import React, { useState, useEffect } from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'
import { Link } from "react-router-dom";
import  ShopCard from '../modules/ShopCard';
import { useLocation } from 'react-router';


const Restaurants = () => {
  const [shops, setShops] = useState([""])
  const { state } = useLocation();
  const lat = state.latitude
  const lng = state.longitude
  const range = state.radius
  const [radius, setRadius] = useState(range)

  useEffect(() => {
    const f = async () => {
      // GETクエリに探索範囲追加
      (await fetch(`https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c64ae792fe1b1ca3&lat=${lat}&lng=${lng}&range=${range}&format=json`)).json()
        .then(res => {
          console.log(`https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c64ae792fe1b1ca3&lat=${lat}&lng=${lng}&range=${range}&format=json`)
          console.log(res.results)
          setShops(res.results.shop)
        })
        .then(data => {

        })
      }
      f()
  }, [])

  const displayRadius = () => {
    let radiusMeter = "0m"
    if (radius === "1") {
      radiusMeter = "300m"
    } else if (radius === "2") {
      radiusMeter = "500m"
    } else if (radius === "3") {
      radiusMeter = "1000m"
    } else if (radius === "4") {
      radiusMeter = "2000m"
    } else if (radius === "5") {
      radiusMeter = "3000m"
    }

    return radiusMeter
  }

  return (
    <>
      <Header />

      <div className="back-button">
        <Link to="/home">戻る</Link>
      </div>

      <div className="location-wrapper">
        <div>
          <p>現在地： 静岡県浜松市中区城北</p>
          <p>探索半径：{ displayRadius() }以内</p>
        </div>
      </div>

      { shops.map((shop) =>
        <ShopCard
          shop = {shop}
        />
      )}

      <Footer />
    </>
  )
}

export default Restaurants