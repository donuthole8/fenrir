import Header from '../modules/Header'
import Footer from '../modules/Footer'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import { makeStyles } from "@material-ui/core";
import Button from '@mui/material/Button';


const useStyles = makeStyles({
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
  },
});

const Details = () => {
  const classes = useStyles();
  const { state } = useLocation();

  return (
    <>
      <Header />

      <div className={classes.main}>
        <Button variant="outlined" color="error">
          <div className={classes.back}>
            <Link to={{
              pathname: "/restaurants",
              state: {
                latitude: state.lat,
                longitude: state.lng,
                radius: state.range
              }
            }}>戻る</Link>
          </div>
        </Button>

        <div className="shop-name">
          <h1>{ state.props.name }</h1>
        </div>

        <div className={classes.details}>
          <img className="shop-image" src={ state.props.photo.pc.l } width="300" alt="" />
          <div className="address">
            <p>住所：{ state.props.address }</p>
          </div>
          <div classNmae="hours">
            <p>営業時間：{ state.props.open }</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Details