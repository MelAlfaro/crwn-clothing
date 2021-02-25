import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';


function App() {
  return (
    <div>
      <Header /> {/* Al header lo queremos fuera del switch, porque independientemente de la página en la que se esté, se quiere tener el mismo header visible siempre */}
      <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;


// Route tiene 3 propiedades: exact - path - component. path y component son muy obvias, 
// exact puede ser true o false (true si se pone solo exact), en dado caso, React renderiza cualquier ruta que haga
// match con el path.
// Ejm: en el caso anterior, si exact es false, dado que los path son "/" y "/hats", se cumple las condiciones en el URL
// para que react haga render de todo, porque el url localhost:3000/hats, incluye / e incluye /hats


// Switch se encarga de que se haga render en cambio, del primer match de URL que encuentre, si encuentra que path es /abc (y no hay un routing creado para /abc)
// entonces nada mas (si está de primero en el código) se va a renderizar sin importar que se ponga delante en el URL, la primera coincidencia en este caso localhost:3000/
// esto es útil si no se quiere accidentalmete renderizar multiples componentes, o si el usuario ingresa propiedades que no existen a la URL
