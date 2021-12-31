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
  const lng = state.longitude;

  useEffect(() => {
    const f = async () => {
      // GETクエリに探索範囲追加
      (await fetch(`https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c64ae792fe1b1ca3&lat=${lat}&lng=${lng}&range=3&format=json`)).json()
        .then(res => {
          setShops(res.results.shop)
          console.log(`https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c64ae792fe1b1ca3&lat=34.7205243&lng=137.7218242&range=3&format=json`)
          console.log(res)
        })
        .then(data => {

        })
      }
      f()
  }, [])

  return (
    <>
      <Header />

      <div className="back-button">
        <Link to="/home">戻る</Link>
      </div>

      <div className="location-wrapper">
        <div>
          <p>現在地： 東京都渋谷区</p>
          <p>探索半径：〇〇m以内</p>
          {/* Home.jsから受け取った現在地 */}
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