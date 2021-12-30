import React, { useState, useEffect } from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'
import { Link } from "react-router-dom";
import ShopCard from '../modules/ShopCard';
import axios from 'axios';


// function Restaurants() {
const Restaurants = () => {
  const [shops, setShops] = useState([""])

  useEffect(() => {
    const f = async () => {
      (await fetch('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c64ae792fe1b1ca3&lat=35.669220&lng=139.761457&format=json')).json()
        .then(res => {
          console.log("res->", res.results.shop)
          setShops(res.results.shop)
        })
        .then(data => {
          // console.log('data->', data)
        })
      }
      f()
  }, [])

  return (
    <>
      <Header />

      <div className="test">
        ＊テスト＊
        {/* { data } */}
        { shops[0].name }
        ＊テスト＊
      </div>

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
          name = { shop.name }
          access = { shop.access }
          logo_image = { shop.logo_image }
        />
      )}

      <Footer />
    </>
  )
}

export default Restaurants