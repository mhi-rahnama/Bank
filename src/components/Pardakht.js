import "../App.css";
import * as React from "react";
import sideBack from "../img/sideBack.jpg";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import { productContext } from "./Context";

function Pardakht() {
  const {
    status,
    setStatus,
    setDestination,
    Price,
    family,

    mojudi,
    setFamily,
  } = React.useContext(productContext);
  const [toggle, setToggle] = React.useState(false);
  console.log("Price", Price);

  const [price, setPrice] = Price;
  console.log("price", price);

  function onclick() {
    if (price > mojudi) {
      setToggle(true);
    } else setStatus("resid");
  }
  return (
    <div className="App">
      {status == "pardakht" ? (
        <div className="container">
          <div
            className="frame"
            style={{
              backgroundColor: "white",
              width: "400px",
              height: "480px",
              direction: "rtl  ",
            }}
          >
            <TextField
              color="warning"
              style={{ width: "350px", marginTop: "20px" }}
              placeholder=""
              label="لطفا کارت مقصد را وارد کنید"
              variant="outlined"
              type="number"
              onChange={(e) => setDestination(e.target.value)}
            />

            <TextField
              color="warning"
              style={{ width: "350px", marginTop: "20px" }}
              placeholder=""
              label="لطفا مبلغ را وارد کنید"
              variant="outlined"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />

            {toggle ? (
              <p style={{ color: "red" }}>موجودی حساب شما کافی نمی باشد</p>
            ) : null}
            <Button
              style={{ width: "100px", height: "50px", marginTop: "100px" }}
              className="Button"
              variant="contained"
              color="primary"
              onClick={onclick}
            >
              انتقال
            </Button>
          </div>
          <div
            classname="image"
            style={{
              backgroundImage: `url(${sideBack})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "400px",
              height: "500px",
            }}
          ></div>
        </div>
      ) : null}
    </div>
  );
}

export default Pardakht;
