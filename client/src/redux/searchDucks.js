import axios from "axios";

//Constantes
const dataInicial = {
  array: [],
  resFiltrados: [],
  max: 9,
  min: 0,
  value: [],
  interruptor: true,
  siguientes: [],
  contador: 0
};

//Types
const OBTENER_PRODUCTOS = "OBTENER_PRODUCTOS";
const PARA_FILTRAR_MENOR_PRECIO = "PARA_FILTRAR_MENOR_PRECIO";
const PARA_FILTRAR_MAYOR_PRECIO = "PARA_FILTRAR_MAYOR_PRECIO";
const CATEGORY_SEARCH = "CATEGORY_SEARCH";
const SIGUIENTES_PRODUCTOS = "SIGUIENTES_PRODUCTOS";
const ANTERIORES_PRODUCTOS = "ANTERIORES_PRODUCTOS";
const RESET_INDICES = 'RESET_INDICES';
const INCREMENTO_CONTADOR = 'INCREMENTO_CONTADOR';
const DECREMENTO_CONTADOR = ' DECREMENTO_CONTADOR'
const RESET_CONTADOR = 'RESET_CONTADOR'
const INTERRUPTOR_LEYENDA = 'INTERRUPTOR_LEYENDA'

//Reducer
export default function searchReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        array: action.payload,
        value: action.value,
        // interruptor: true,
      };
    case SIGUIENTES_PRODUCTOS:
      return {
        ...state,
        max: action.payload.max,
        min: action.payload.min,
      };
    case ANTERIORES_PRODUCTOS:
      return {
        ...state,
        max: action.payload.max,
        min: action.payload.min,
      };
    case CATEGORY_SEARCH:
      return {
        ...state,
        array: action.payload,
        // interruptor: false,
      };
    case PARA_FILTRAR_MENOR_PRECIO:
      return {
        ...state,
        array: action.payload,
        // interruptor: false,
      };
    case PARA_FILTRAR_MAYOR_PRECIO:
      return {
        ...state,
        array: action.payload,
        // interruptor: false,
      };
      case  RESET_INDICES:
        return {
          ...state,
          max: action.payload.max,
          min: action.payload.min
        };
     case  INCREMENTO_CONTADOR:
       return {
         ...state,
         contador: action.payload
       }
       case  DECREMENTO_CONTADOR:
        return {
          ...state,
          contador: action.payload
        }
        case  RESET_CONTADOR:
          return {
            ...state,
            contador: action.payload
          }
          case INTERRUPTOR_LEYENDA:
            return {
              ...state,
              interruptor: action.payload
            }
    default:
      return state;
  }
}

//::::: OBTENER PRODUCTOS CONECTADO A BACK
export const obtenerProductos = (valor) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/search?q=${valor}`);
    dispatch({
      type: OBTENER_PRODUCTOS,
      payload: res.data[0],
      value: valor,
    });
  } catch (error) {
    console.log(error);
  }
};

//:::OBTENER PRODUCTOS POR CATEGORIA

export const categorySearch = (val) => async (dispatch, getState) => {
   const max = getState().productos.max;
  const min = getState().productos.min;
  const array = getState().productos.array;
  console.log(min)
  console.log(max)
  console.log(array)
  
  try {
    const res = await axios.get(
      `/search/category?q=${val}`
    );
    console.log(res.data[0]);
    dispatch({
      type: CATEGORY_SEARCH,
      payload: res.data[0],
    });
  } catch (error) {
    console.log(error);
  }
};

//FILTROS DE PRECIO ASC Y DESC

export const paraFiltrarMenorP = () => (dispatch, getState) => {
  const arr = getState().productos.array;
  console.log(arr);
  dispatch({
    type: PARA_FILTRAR_MENOR_PRECIO,
    payload: arr.sort(function (prev, next) {
      return prev.price - next.price;
    }),
  });
};

export const paraFiltrarMayorP = () => (dispatch, getState) => {
  const arra = getState().productos.array;
  console.log(arra);
  dispatch({
    type: PARA_FILTRAR_MAYOR_PRECIO,
    payload: arra.sort(function (prev, next) {
      return next.price - prev.price;
    }),
  });
};

//:::: SIGUIENTES Y ANTERIORES

export const siguientesProductos = () => async (dispatch, getState) => {
  const max = getState().productos.max;
  const min = getState().productos.min;

  dispatch({
    type: SIGUIENTES_PRODUCTOS,
    payload: {
      max: max + 9,
      min: min + 9,
    },
  });
};

export const anterioresProductos = () => async (dispatch, getState) => {
  const max = getState().productos.max;
  const min = getState().productos.min;

  dispatch({
    type: ANTERIORES_PRODUCTOS,
    payload: {
      max: max - 9,
      min: min - 9,
    },
  });
};

//::: RESET INDICES

export const resetIndices = () => async (dispatch) => {
  // const max = getState().productos.max;
  // const min = getState().productos.min;

  dispatch({
    type: RESET_INDICES,
    payload: {
      max: 9,
      min: 0
    },
  });
};

//::::CONTADOR PARA MOSTRAR U OCULTAR SIGUIENTES

export const incrementoContador = () => (dispatch, getState) => {
  
  const contador = getState().productos.contador;

    dispatch({
    type: INCREMENTO_CONTADOR,
    payload: contador + 1
  });
}

export const decrementoContador = () => (dispatch, getState) => {
  
  const contador = getState().productos.contador;

    dispatch({
    type: DECREMENTO_CONTADOR,
    payload: contador - 1
  });
}

export const resetContador = () => (dispatch, getState) => {
  
    dispatch({
    type: RESET_CONTADOR,
    payload: 0
  });
}

export const interruptorLeyenda = () => (dispatch) => {
  
  dispatch({
  type: INTERRUPTOR_LEYENDA,
  payload: false
});
}