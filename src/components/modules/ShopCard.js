import React, { useState, useEffect, Component } from 'react'
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  card: {
    // textAlign: "center"
  },
});

const ShopCard = (props) => {
  const classes = useStyles();

  const To = {
    pathname: "/details",
    state: {
      props: props.shop,
      lat: props.lat,
      lng: props.lng,
      range: props.range
    }
  }

  const getImg = () => {
    let mainImg
    try {
      if (props.shop.photo.pc.l){
        throw new Error('err')
      }
      mainImg = props.shop.photo.pc.l
    } catch(e) {
      mainImg = props.shop.logo_image
    }

    return mainImg
  };

  return (
    <>
      <Link to={To}>
        <Card sx={{ maxWidth: 300, height: 300, margin: 3 }}>
          <CardHeader
            title={ props.shop.name }
            subheader={ props.shop.access }
            avatar={
              <Avatar aria-label="recipe">
                <img src={ props.shop.logo_image } alt=""/>
              </Avatar>
            }
          ></CardHeader>
          <CardMedia sx={{ maring: 1, maxWidth: 250, textAlign: "center" }}
            component="img"
            // image={ getImg }
            image={ props.shop.photo.pc.l }
            // image={ props.shop.logo_image }
          />
        </Card>
      </Link>
    </>
  )
}

export default ShopCard;
