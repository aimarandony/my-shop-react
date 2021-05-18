import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const Pedido = () => {
  return (
    <div>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="empresa-label" shrink>
          Seleccione una empresa
        </InputLabel>
        <Select
          labelId="empresa-label"
          id="empresa"
        >
          <MenuItem value={1}>The Coca Cola Company</MenuItem>
          <MenuItem value={2}>AJE</MenuItem>
          <MenuItem value={3}>Lays</MenuItem>
          <MenuItem value={4}>Lays4</MenuItem>
          <MenuItem value={5}>Lays5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Pedido;
