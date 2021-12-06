import * as React from "react";
import sideBack from "../img/sideBack.jpg";
import "./resid.css";
import { productContext } from "./Context";
function Resid() {
  const { status, destination, setDestination, cartmaba, Price } =
    React.useContext(productContext);
  const [cartNumber2, setCartNumber2] = React.useState();
  const [price, setPrice] = Price;
  const CartNumber = parseInt(destination);
  const CartNumberSourece = parseInt(cartmaba);

  const StringCartNumber = CartNumber.toString();
  const StringCartNumberSourece = CartNumberSourece.toString();

  const CartNumber_Lenght = CartNumber.toString().length;
  const CartNumberSourece_Lenght = CartNumberSourece.toString().length;

  let ShowNumber = StringCartNumber.substr(0, CartNumber_Lenght - 6);
  let ShowNumberSourece = StringCartNumberSourece.substr(
    0,
    CartNumberSourece_Lenght - 6
  );

  console.log(price);
  let Receipt = ShowNumber + "******";
  let ReceiptSourece = ShowNumberSourece + "******";
  return (
    <div className="App">
      {status == "resid" ? (
        <div className="container">
          <div
            className="frame"
            style={{
              backgroundColor: "white",
              width: "400px",
              height: "480px",
            }}
          >
            <div className="logo"></div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="Bank">بانک آینده</div>
            </div>

            <div className="Receipt">{ReceiptSourece}: کارت مبدا</div>
            <div className="ReceipSource">{Receipt}:کارت مقصد</div>

            <div className="barcode"></div>
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
export default Resid;
