
import { createSelector } from 'reselect'; // reselect library: https://www.npmjs.com/package/reselect

// hay dos tipos de selectors, input y output


const selectCart = state => state.cart;

// input selector
// una funcion que toma todo el state, y solo retorna una porcion del mismo
// createSelect toma 2 argumentos:
//  el primer argumento es una coleccion, un array de input selectors
//  el segundo, es una funcion que retornara el value que se desee fuera del selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

// esta funcion acumulará todos los valores de las cantidades de los items en el cart, para mostrar el numero de
// items dentro del icono de cart
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity,
            0
        )
);