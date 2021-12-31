import Header from '../modules/Header'
import Footer from '../modules/Footer'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';


const Details = () => {
  // console.log(props)

  const { state } = useLocation();
  console.log(state)

  return (
    <>
      <Header />

      <div>
        <p>画面遷移先のページ</p>
      </div>

      <div className="back-button">
        {/* 検索条件を保持したまま戻るようにしたい */}
        <Link to="/restaurants">戻る</Link>
      </div>

      <div className="shop-name">
        <h3>店名</h3>
      </div>

      <div className="shop-details-wrapper">
        <img className="shop-image" src="https://ximg.retty.me/resize/s880x880/-/retty/img_ebisu/restaurant/100000029386/archive/695256-5c54315467bdb.jpg" width="100"/>
        <div className="address">
          <p>住所：東京都渋谷区</p>
        </div>
        <div classNmae="hours">
          <p>営業時間：24時間</p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Details