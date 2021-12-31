import Header from '../modules/Header'
import Footer from '../modules/Footer'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';


const Details = () => {
  const { state } = useLocation();
  // console.log(state)

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
        <h3>{ state.name }</h3>
      </div>

      <div className="shop-details-wrapper">
        <img className="shop-image" src={ state.logo_image } width="200"/>
        <div className="address">
          <p>住所：{ state.address }</p>
        </div>
        <div classNmae="hours">
          <p>営業時間：{ state.open }</p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Details