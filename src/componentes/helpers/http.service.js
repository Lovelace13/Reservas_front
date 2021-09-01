import axios from 'axios';
// eslint-disable-next-line no-undef
const { REACT_APP_API } = process.env;

const httpInstance = (history = null, logoutuser = null) => { //history = null, logoutuser = null
   var headers = {};
   if (localStorage.getItem('RESERVA_APP')) {
     console.log("entro al localstorage")
      headers.Authorization = `Bearer ${
         JSON.parse(localStorage.getItem('RESERVA_APP')).usuario[0]
            .accessToken
      }`;
   }

   // Se crea instancia http con valores default
   const httpInstance = axios.create({
      baseURL: REACT_APP_API,
      headers: headers,
   });

   // Interceptor para enviar datos recibidos y checar errores
   httpInstance.interceptors.response.use(
      (config) => {
         return config;
      },
      (error) => {
         if (!error.response) {
            return new Promise((resolve, reject) => {
               reject(error);
            });
         }

         if (error.response.status === 403 || error.response.status === 401) {
            console.log('No autorizado');
            // logoutuser(localStorage.getItem('RESERVA_APP'));
            localStorage.removeItem('RESERVA_APP');

            // if (history) {
            //    history.push('/login/');
            // } else {
            //    window.location = '/login/';
            // }
         }
        
         if (error.response.status === 400 ) {
          console.log('Recurso no encontrado');

         }

         return new Promise((resolve, reject) => {
            reject(error);
         });
      },
   );

   return httpInstance;
};

export default httpInstance;