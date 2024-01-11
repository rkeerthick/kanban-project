import React from "react";
import { TextField } from "@mui/material";

export interface InputElementPropType {
  placeholder: string;
  value: string;
}

const InputElement = ({ placeholder, value }: InputElementPropType) => {
  return (
    <TextField
      variant="outlined"
      label={placeholder}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default InputElement;
