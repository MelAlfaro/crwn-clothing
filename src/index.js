import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // este componente va a hacer wrap sobre todo el app, ya que se busca que todo tenga acceso

import './index.css';
import App from './App';

import store from './redux/store';


ReactDOM.render(
  // el Provider, que se obtiene de react redux, es un componente que una vez pasado al objeto store, 
  //será capaz de darle al store, contexto al resto de la app para despachar acciones al store, o jalar
  // valores del store y hacia nuestros componentes.
  <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


