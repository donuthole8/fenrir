import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


const ShopCard = (props) => {
  console.log(props)
  return (
    <>
      {/* これを複数【検索ヒット数分用意】 */}
      <div className="restaurant">
        <h2 className="shop-name">{ props.name }</h2>
        <p className="access">アクセス方法：{ props.access }</p>
        <img className="shop-image" src={ props.logo_image } width="100"/>
        <Link to="/details">詳細情報</Link>
      </div>
    </>
  )
}

export default ShopCard
