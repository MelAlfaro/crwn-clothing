import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // connect es un HOC que nos permite modificar nuestros componentes para tener acceso a cosas relacionadas a redux

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg'; // sintaxis especial en react para importar SVGs

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {currentUser ? (
                <div className='option'  onClick={() => auth.signOut()}>SIGN OUT</div>
            ) : (
                <Link className='option' to='/signin'>SIGN IN</Link>
            )}
        </div>
    </div>
)

// donde state es el root reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);