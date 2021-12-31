// import React, { useState } from 'react'
import React, { useState, useEffect, Component } from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"
import { useHistory } from "react-router-dom";


const ShopCard = (props) => {
  let history = useHistory();

  // const handleClick = () => {
  //   history.push({
  //     pathname: "/details",
  //     state: { text: setState("setState") }
  //   });
  // }

const To = {
  pathname: "/details",
  state: "test!!!"
}

  return (
    <>
      {/* これを複数【検索ヒット数分用意】 */}
      <div className="restaurant">
        <h2 className="shop-name">{ props.name }</h2>
        <p className="access">アクセス方法：{ props.access }</p>
        <img className="shop-image" src={ props.logo_image } width="100"/>
        {/* <Link to={{pathname: "/details",  name: "props"}} >詳細情報</Link> */}

        {/* <button onClick={handleClick}>👉画面遷移👉</button> */}
        <Link to={To}>詳細情報</Link>
        {/* <Link to="/details">詳細情報</Link> */}
      </div>
    </>
  )
}

export default ShopCard;
