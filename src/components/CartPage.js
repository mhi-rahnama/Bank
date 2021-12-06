import "../App.css";
import * as React from "react";

import sideBack from "../img/sideBack.jpg";
import cart from "../img/cart2.jpg";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { productContext } from "./Context";

import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
function CartPage() {
  const {
    status,
    setStatus,
    date,
    setDate,
    cartmaba,
    setMabda,
    name,
    setName,
    cvv2,
    setCvv2,
    family,
    setFamily,
  } = React.useContext(productContext);
  // const letter1 = [];
  // const letter2 = [];
  // const letter3 = [];
  // const letter4 = [];
  // let text = "6395991167777259";
  // console.log(typeof text);

  // for (let i = 0; i < 4; i++) {
  //   letter1[i] = text.charAt(i);
  // }
  // for (let i = 4; i < 8; i++) {
  //   letter2[i] = text.charAt(i);
  // }
  // for (let i = 8; i < 12; i++) {
  //   letter3[i] = text.charAt(i);
  // }
  // for (let i = 12; i < 17; i++) {
  //   letter4[i] = text.charAt(i);
  // }
  function onclick() {
    setStatus("pardakht");
    setDate("dataCartpage");
  }
  return (
    <div>
      {status == "cart" ? (
        <div className="CartPage">
          <div className="container">
            <div
              className="frame"
              style={{
                backgroundColor: "white",
                width: "400px",
                height: "480px",
              }}
            >
              <div
                className="cart"
                style={{
                  backgroundImage: `url(${cart})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "300px",
                  height: "170px",
                  marginTop: "40px",
                }}
              >
                <p className="cartNumber1">{cartmaba}</p>

                <p className="expire">تاریخ انقضا : {date} </p>

                <p className="cvv2">cvv2:{cvv2} </p>
                <p className="name">{name} </p>
              </div>

              <Button
                style={{ width: "100px", height: "50px", marginTop: "100px" }}
                className="Button"
                variant="contained"
                color="primary"
                onClick={onclick}
              >
                مرحله بعد
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
        </div>
      ) : null}
    </div>
  );
}

export default CartPage;
