import React, { useEffect, useState } from "react";

import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@material-ui/core";

import Empty from "../../images/empty.svg";
import "./Supervisar.css";
import { Empresa } from "../../models/Empresa";
import { Empresas } from "../../data/Empresas";
import { Product } from "../../models/Producto";
import { Products } from "../../data/Productos";

const Supervisar = () => {
  const [empresa, setEmpresa] = useState("");
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [showNoSelected, setShowNoSelected] = useState(false);

  const handleSelect = (e: any) => {
    console.log(e.target.value);
    setEmpresa(e.target.value);
    const dataProducts = Products.filter(
      (data) => data.business.id === e.target.value
    );
    setProducts(dataProducts);
  };

  const handleSwitch = (e: any) => {
    console.log(e.target.checked);
    setShowNoSelected(e.target.checked);
  };

  useEffect(() => {
    setEmpresas(Empresas);
  }, []);

  return (
    <div className="Supervisar">
      <h2>SUPERVISAR</h2>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="empresa-label">Seleccione una empresa</InputLabel>
        <Select
          labelId="empresa-label"
          id="empresa"
          value={empresa}
          onChange={handleSelect}
        >
          {empresas.map((data) => (
            <MenuItem value={data.id}>{data.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="divider" />
      {empresa === "" ? (
        <div className="empty-content">
          <img src={Empty} alt="Empty Ilustration" />
          <p>Seleccione una empresa para supervisar sus productos.</p>
        </div>
      ) : (
        <div className="data-content">
          <FormControlLabel
            control={
              <Switch checked={showNoSelected} onChange={handleSwitch} />
            }
            label="Mostrar no seleccionados."
          />
          <p className="lastUpdate">
            Última actualización - 22 de Abril del 2021
          </p>
          <div className="check-group">
            {products.map((data) => (
              <FormControlLabel
                key={data.id}
                control={<Checkbox name="checkedC" />}
                label={data.name}
                labelPlacement="start"
                style={{
                  margin: 0,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              />
            ))}
          </div>
          <div className="group-btns">
            <Button
              size="large"
              variant="outlined"
              color="primary"
              className="btn-custom"
            >
              Limpiar
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className="btn-custom"
            >
              Guardar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Supervisar;
