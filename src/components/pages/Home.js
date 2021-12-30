import React from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'
import { Link } from "react-router-dom";

function Home() {
  // const [radius, setRadius]
  return (
    <>
      <Header />

      <div className="location-wrapper">
        <div>
          <p>現在地： 東京都渋谷区</p>
          {/* 👇Reactでの現在地取得サンプル👇 */}
          {/* https://qiita.com/shinshin86/items/63142a4d4b498d562fba */}

          {/* テスト値：lat=35.669220,lng=139.761457 */}
          {/* https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c64ae792fe1b1ca3&lat=35.669220&lng=139.761457 */}
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

