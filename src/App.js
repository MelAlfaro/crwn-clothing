import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  /*Calling the unsubscribe function when the component is about to unmount is the best way to make sure we don't get 
  any memory leaks in our application related to listeners still being open even if the component that cares about 
  the listener is no longer on the page.*/
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header /> { /* Al header lo queremos fuera del switch, porque independientemente de la página en la que se esté, se quiere tener el mismo header visible siempre */}
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SingInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

// esta función solo se encarga de despachar una nueva acción, la que sea que queramos pasar, como action.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


// Route tiene 3 propiedades: exact - path - component. path y component son muy obvias, 
// exact puede ser true o false (true si se pone solo exact), en dado caso, React renderiza cualquier ruta que haga
// match con el path.
// Ejm: en el caso anterior, si exact es false, dado que los path son "/" y "/hats", se cumple las condiciones en el URL
// para que react haga render de todo, porque el url localhost:3000/hats, incluye / e incluye /hats


// Switch se encarga de que se haga render en cambio, del primer match de URL que encuentre, si encuentra que path es /abc (y no hay un routing creado para /abc)
// entonces nada mas (si está de primero en el código) se va a renderizar sin importar que se ponga delante en el URL, la primera coincidencia en este caso localhost:3000/
// esto es útil si no se quiere accidentalmete renderizar multiples componentes, o si el usuario ingresa propiedades que no existen a la URL
