import React from 'react'
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  footer: {
    backgroundColor: "#D0101B",
    width: "100%",
    position: "absolute",
    bottom: 0,

  },
  text: {
    fontSize: 10,
    color: "#FFFFFF",
  },
  credit: {
    textAlign: "right",
    padding: 5
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.credit}>
        <div className={classes.text}>【画像提供：ホットペッパー グルメ】</div>
        <a href="http://webservice.recruit.co.jp/">
          <img src="http://webservice.recruit.co.jp/banner/hotpepper-s.gif" alt="ホットペッパー Webサービス" width="135" height="17" border="0" title="ホットペッパー Webサービス"/>
        </a>
      </div>
    </div>
  );
}
