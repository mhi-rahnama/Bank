import "./firstPage.css";
import sideBack from "../img/sideBack.jpg";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { productContext } from "./Context";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@mui/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import PrimaryTextField from "./PrimaryTextField";

function FirstPage() {
  const [text, setText] = useState();
  const {
    status,
    setStatus,
    cartmaba,
    setMabda,
    name,
    setName,
    mojudi,
    setMojudi,
    cvv2,
    setCvv2,
    date,
    setDate,
  } = React.useContext(productContext);
  const [cartNumber2, setCartNumber2] = useState();
  const [name2, setName2] = useState();
  const [family2, setFamily2] = useState();
  const [cvv22, setCvv22] = useState({ number: "" });
  const [date2, setDate2] = useState();

  function onclick() {
    setStatus("cart");
    setDate(date2);
    // setCvv2(cvv22);
    console.log("aaa", cvv22.number);
    setName(name2);
    setMabda(cartNumber2);
  }

  const onChange1 = (name) => (event) => {
    console.log("onchangggg");

    setCvv22({ ...cvv22, [name]: event.target.value });
  };

  const theme = createTheme({
    // root: {
    //   direction: "rtl",
    //   width: "300px",
    // },
  });

  return (
    <div className="App">
      {status == "firstPage" ? (
        // <ThemeProvider theme={theme}>

        <div className="container">
          <div className="frame" dir="rtl">
            <PrimaryTextField
              label="شماره کارت خود را وارد کنید"
              variant="outlined"
              type="number"
              onChange={(e) => setCartNumber2(e.target.value)}
            />
            <PrimaryTextField
              label="نام خود را وارد کنید"
              variant="outlined"
              type="number"
              onChange={(e) => setName2(e.target.value)}
            />
            <PrimaryTextField
              label="موجودی خود را وارد کنید "
              variant="outlined"
              type="number"
              onChange={(e) => setMojudi(e.target.value)}
            />

            <PrimaryTextField
              label="cvv2 خود را وارد کنید "
              variant="outlined"
              type="number"
              name="name"
              id="1"
              value={"cvv22num"}
              onChange={onChange1}
            />
            {console.log("cccc", cvv22)}
            <TextField
              color="warning"
              style={{
                width: "350px",
                marginTop: "20px",
                direction: "rtl",
              }}
              placeholder=""
              label="ماه/سال"
              variant="outlined"
              type="number"
              onChange={(e) => setDate2(e.target.value)}
            />

            <Button
              style={{
                width: "100px",
                height: "50px",
                marginTop: "20px",
              }}
              className="Button"
              variant="contained"
              color="primary"
              onClick={onclick}
            >
              تایید
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
      ) : // </ThemeProvider>
      null}
    </div>
  );
}

export default FirstPage;
