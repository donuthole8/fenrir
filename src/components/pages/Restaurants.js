import React, { useState, useEffect } from 'react'
import Header from '../modules/Header'
import Footer from '../modules/Footer'
import { Link } from "react-router-dom";
import  ShopCard from '../modules/ShopCard';
import { useLocation } from 'react-router';
import { makeStyles } from "@material-ui/core";
import Button from '@mui/material/Button';


const useStyles = makeStyles({
  card: {
    textAlign: "center",
  },
  main: {
    backgroundColor: "#FFD7C9",
    padding: 10,
    height: "100vh",
    textAlign: "center"
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    width: "50vh",
    margin: 20
  },
  text: {
    color: "#222222",
    margin: 20
  },
  back: {
    width: "10vh"
  }
});

const Restaurants = () => {
  const classes = useStyles();

  const [shops, setShops] = useState([""])
  const { state } = useLocation();
  const lat = state.latitude
  const lng = state.longitude
  const range = state.radius
  const [radius, setRadius] = useState(range)

  useEffect(() => {
    const f = async () => {
      (await fetch(`https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c64ae792fe1b1ca3&lat=${lat}&lng=${lng}&range=5&count=100&format=json`)).json()
        .then(res => {
          console.log(res)
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

      <div class={classes.main}>
        <Button className={classes.back} variant="outlined" color="error">
          <div>
            <Link to="/home">戻る</Link>
          </div>
        </Button>

        <div className="location-wrapper">
          <div>
            <p>現在地： 静岡県浜松市中区城北</p>
            <p>探索半径：{ displayRadius() }以内</p>
          </div>
        </div>

        <div>
          { shops.map((shop) =>
            <ShopCard
              className={classes.card}
              shop = { shop }
              lat = { lat }
              lng = { lng }
              range = { range }
            />
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Restaurants