import React from "react";
import Paginas2 from "./Paginas2";
import "../Button.css";
import { useSelector, useDispatch } from "react-redux";
import {
  paraFiltrarMayorP,
  paraFiltrarMenorP,
  categorySearch,
  resetIndices,
  resetContador,
  interruptorLeyenda 
} from "../redux/searchDucks";

const Catalogo = () => {

  const dispatch = useDispatch();
  var arr = useSelector((store) => store.productos.array[0]);
  console.log(arr);

  const res = useSelector((store) => store.productos.array);

  var energetica = "1";
  var pisco = "2";
  var ron = "3";
  var bebida = "4";
  var snack = "5";
  var cerveza = "6";
  var vodka = "7";

  const handleEnergetica = () => {
    dispatch(resetIndices());
    dispatch(resetContador());
    dispatch(interruptorLeyenda());
    dispatch(categorySearch(energetica))   
  };

  const handlePisco = () => {
    dispatch(resetIndices());
    dispatch(resetContador());
    dispatch(interruptorLeyenda());
    dispatch(categorySearch(pisco))
  };

  const handleRon = () => {
    dispatch(resetIndices());
    dispatch(resetContador());
    dispatch(interruptorLeyenda());
    dispatch(categorySearch(ron))
  };

  const handleBebida = () => {
    dispatch(resetIndices());
    dispatch(resetContador());
    dispatch(interruptorLeyenda());
    dispatch(categorySearch(bebida))
  };

  const handleSnack = () => {
    dispatch(resetIndices());
    dispatch(resetContador());
    dispatch(interruptorLeyenda());
    dispatch(categorySearch(snack))
  };

  const handleCerveza = () => {
    dispatch(resetIndices());
    dispatch(resetContador());
    dispatch(interruptorLeyenda());
    dispatch(categorySearch(cerveza))
  };

  const handleVodka = () => {
    dispatch(resetIndices());
    dispatch(resetContador());
    dispatch(interruptorLeyenda());
    dispatch(categorySearch(vodka))
  };

  const handleMenorPrecio = () => {
    dispatch(resetIndices());
    dispatch(resetContador());
    dispatch(interruptorLeyenda());
    dispatch(paraFiltrarMenorP())
  };

  const handleMayorPrecio = () => {
    dispatch(resetIndices());
    dispatch(resetContador());
    dispatch(interruptorLeyenda());
    dispatch(paraFiltrarMayorP())
  };

  return (
    <div>
      <div className="row">
        <h5 style={{ display: "flex", justifyContent: "center" }}>
          Ordená los productos
        </h5>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={handleMenorPrecio}
          >
            <i className="material-icons">attach_money</i>Menor a Mayor
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={handleEnergetica}
          >
            Bebida energética
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={handlePisco}
          >
            Pisco
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={handleRon}
          >
            Ron
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={handleMayorPrecio}
          >
            <i className="material-icons ">attach_money</i>Mayor a Menor
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={handleSnack}
          >
            Snack
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={handleCerveza}
          >
            Cerveza
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={handleVodka}
          >
            Vodka
          </button>
          <button
            type="submit"
            className="btn darkcyan button"
            onClick={handleBebida}
          >
            Bebida
          </button>
        </div>
      </div>
      <div className="row">
        <div></div>
      </div>
      <div className="content">
        <div className="row">{res ? <Paginas2 p={res.results} /> : null}</div>
      </div>
    </div>
  );
};

export default Catalogo;
