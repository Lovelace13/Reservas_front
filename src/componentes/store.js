import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';

const initialState = {
   usuario: [],
};

const reducer = (state = initialState, action) => {
   if (action.type === 'LOGIN_USER') {
      return {
         ...state,
         usuario: state.usuario.concat(action.usuario),
      };
   } else if (action.type === 'LOGOUT_USER') {
      return {
         usuario: [],
      };
   }

   return state;
};

//compose permite combinar potenciadores
const enhancer = compose(persistState('usuario', { key: 'RESERVA_APP' }));

export default createStore(reducer, enhancer);