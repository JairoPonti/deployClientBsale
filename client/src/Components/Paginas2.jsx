import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { siguientesProductos, anterioresProductos, incrementoContador, decrementoContador } from "../redux/searchDucks";


const Paginas = () => {


  
  const [arrSig, setArrsig] = useState(0)

  const dispatch = useDispatch();

  var productos = useSelector((store) => store.productos.array);
  var indexA = useSelector((store) => store.productos.min);
  var indexB = useSelector((store) => store.productos.max);
  var contador = useSelector((store) => store.productos.contador);
  var interruptor = useSelector((store) => store.productos.interruptor);

  var prodFiltrados = productos.slice(0, 7);
  var resto = productos.length % 9
  var division = Math.trunc( productos.length / 9)


   function showSiguientes (){
     if (resto === 0){
    var cantidadPaginas = resto
    setArrsig (cantidadPaginas)
    
  } else {
    setArrsig(division + 1)
  }
}


useEffect(() => {
  showSiguientes()
}, [productos])


  var leyendaTuBusqueda = (
    <h3 style={{ textAlign: "center", marginTop: "140px" }}>
      Tu búsqueda aparecerá aquí
    </h3>
  );

  var leyendaSinProductos = (
    <h3 style={{ textAlign: "center", marginTop: "140px" }}>
      No hay productos que coincidan con tu búsqueda
    </h3>
  );

  function siguientesYanteriores(productos) {
    prodFiltrados = productos.slice(indexA, indexB);
    return prodFiltrados;
  }
 
  console.log(siguientesYanteriores(productos));
   console.log(productos)

  const handleSiguientes = () => {
    dispatch(incrementoContador())
    dispatch(siguientesProductos());
    siguientesYanteriores(productos);
    console.log("Ejecuté siguientes");
  };
  console.log (arrSig)
  console.log (contador)
  const handleAnteriores = () => {
    dispatch(decrementoContador())
    // dispatch(sliceSiguientes())
    dispatch(anterioresProductos());
    siguientesYanteriores(productos);
    console.log("Ejecuté Anteriores");
  };

  // console.log(lengthSliceSiguientes)

  return (
    <div>
      <div className= "row" style={{padding: 20}}>
        {prodFiltrados.length > 0
          ? prodFiltrados.map((e) => (
              <div className="col s13 m6 l4 " key={e.id}>
                <ProductCard
                  img={e.url_image}
                  title={e.name}
                  price={e.price}
                  discount={e.discount}
                  id={e.id}
                />
              </div>
            ))
          : prodFiltrados.length === 0 && interruptor === false
          ? leyendaSinProductos
          : leyendaTuBusqueda}
      </div>

      <div style={{ display: "flex",justifyContent: "center", alignItems: "flex-end", width:300, height:150, marginTop: 10, marginLeft: "auto", marginRight: "auto"}}>
        {indexA !== 0 ? (
          <button 
            className="btn active cyan darken-3"
            onClick={handleAnteriores}
          >
            anteriores
          </button>
        ) : null}
        {prodFiltrados.length !== 0 && contador !== arrSig -1 ? (
          <button 
            className="btn active cyan darken-3"
            onClick={handleSiguientes}
          >
            siguientes
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Paginas;
