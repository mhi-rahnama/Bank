import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { orange } from "@mui/material/colors";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

// function PrimaryTextField({ label, onChange, type, variant, name, value }) {
function PrimaryTextField(props) {
  const CustomTextInput = styled(TextField)({
    "&.MuiTextField-root": {
      width: "340px",
      color: "rgb(17, 2, 102)",
      justifyContent: "center",
      marginTop: "20px",
    },
    "& input:valid:focus + fieldset": {
      borderColor: "green",
    },
    "& label.Mui-focused": {
      borderLeftWidth: 5,
      color: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "blue",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
    },
  });

  return (
    <CustomTextInput
      onChange={props.onChange}
      id={props.name}
      label={props.label}
      name={props.name}
      value={props.value}
      variant={props.variant}
    ></CustomTextInput>
    //{" "}
  );
}

export default PrimaryTextField;
