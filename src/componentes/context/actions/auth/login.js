import httpInstance from '../../../helpers/http.service'; 

export const login = ({ username, password }) => {
   httpInstance()
      .post('/auth/signin', { username, password })
      .then((res) => {
         console.log(res);
         history.push('/dashboard');
      })
      .catch((error) => {
         console.log(error);
      });
};