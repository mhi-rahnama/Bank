import React, { useState } from "react";

import { createContext } from "react";

export const productContext = createContext();

const Context = ({ children }) => {
  const [destination, setDestination] = React.useState();
  const [cartmaba, setMabda] = React.useState();
  const [name, setName] = React.useState();
  const [mojudi, setMojudi] = React.useState();
  const [cvv2, setCvv2] = React.useState();
  const [date, setDate] = React.useState();
  const [price, setPrice] = React.useState();

  const [padakht, setPardakht] = React.useState();
  const [status, setStatus] = React.useState("firstPage");

  return (
    <productContext.Provider
      value={{
        destination,
        setDestination,
        Price: [price, setPrice],
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
      }}
    >
      {children}
    </productContext.Provider>
  );
};
export default Context;
