import React, { useState, useEffect, Component } from 'react'
import { Link } from "react-router-dom";


const ShopCard = (props) => {

  const To = {
    pathname: "/details",
    state: props.shop
  }

  return (
    <>
      {/* これを複数【検索ヒット数分用意】 */}
      <div className="restaurant">
        <h2 className="shop-name">{ props.shop.name }</h2>
        <p className="access">アクセス方法：{ props.shop.access }</p>
        <img className="shop-image" src={ props.shop.logo_image } width="100"/>

        <Link to={To}>詳細情報</Link>
      </div>
    </>
  )
}

export default ShopCard;
