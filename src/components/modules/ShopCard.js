// import React, { useState } from 'react'
import React, { useState, useEffect, Component } from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"


export const ShopCard = (props) => {

  const [state, setState] = useState("")

  const handleChange = (e) => {
    setState(() => "test")
  }

  const handleClick = () => {
    props.history.push({
      pathname: "/details",
      state: { text: setState("setState") }
    });
  }


  return (
    <>
      {/* これを複数【検索ヒット数分用意】 */}
      <div className="restaurant">
        <h2 className="shop-name">{ props.name }</h2>
        <p className="access">アクセス方法：{ props.access }</p>
        <img className="shop-image" src={ props.logo_image } width="100"/>
        {/* <Link to={{pathname: "/details",  name: "props"}} >詳細情報</Link> */}

        <input type='text' value="test-val" onChange={handleChange}></input>
        <button onClick={handleClick}>👉画面遷移👉</button>

        {/* <Link to={To}>詳細情報</Link> */}
      </div>
    </>
  )
}

// export default {
//   ShopCard,
//   withRouter(shopCard),
// }
export default withRouter(ShopCard)


// export withRouter(shopCard);
// export withRouter(shopCard);

// export default ShopCard(
//   withRouter(ShopCard),
// )