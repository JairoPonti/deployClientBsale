import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalogo from './Components/Catalogo.jsx';
import './App.css';
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import Buscador from '../src/Components/Buscador'
import Footer from './Components/Footer.jsx';
import './index.css'


class App extends Component {

  
  render() {

    const store = generateStore()

    return (
      <div className='fondo'>
      <Provider store= {store}>
      <Router>
        <Buscador/>
      {/* <Route exact path="/" component={Buscador} /> */}
      <Route path="/" render={() => <Catalogo state={this.state} />} />
      <Route exact path="/" component={Footer} />
      </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
