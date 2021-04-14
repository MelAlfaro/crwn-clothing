import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state; // es importante tener en consideración que todos los reducers van a recibir el action, así tengan relación o no con él, por lo que es importante retornar el state en caso de que no coincida con ninguna condición con el fin de no alterar el curso de lectura del código
    }
};

export default userReducer;