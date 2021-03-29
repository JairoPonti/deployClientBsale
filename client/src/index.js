import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();


axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

