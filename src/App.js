import "./App.css";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Pardakht from "./components/Pardakht";
import { productContext } from "./components/Context";
import CartPage from "./components/CartPage";
import FirstPage from "./components/firstPage";
import Resid from "./components/Resid";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

import { useState } from "react";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

// const theme = createTheme({
//   "&.MuiInputBase-root": {
//     width: "370px",
//   },
// });
function App() {
  const { status, setStatus, date } = React.useContext(productContext);

  return (
    <div className="App">
      // {/* <ThemeProvider theme={theme}> */}
      <CacheProvider value={cacheRtl}>
        <FirstPage />

        <CartPage />

        <Pardakht />
        <Resid />
      </CacheProvider>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
