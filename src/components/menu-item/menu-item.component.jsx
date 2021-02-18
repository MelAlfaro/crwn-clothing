import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className= 'background-image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }} 
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);

// backgroundImage: react tiene la propiedad style, que nos permite al igual que en los elementos HTML crear estilos
// para cada elemento, uno de ellos es backgroundImaage, que no solo permite dar una imagen de background para un 
// elemento, sino que permite hacerlo de forma dinámica para múltiples componentes, de forma que no hay que crear 
// cada componente uno por uno y darle su backgound.
// backgoundImage se utiliza con JS templates (``) y llamando una url en este caso. 
// (no se puede solo poner el prop como backgroundImage : imageUrl)

// withRouter es un High Order Component (HOC), lo cual es básicamente una función que toma un componente como argumento
// y retorna un componente modificado.