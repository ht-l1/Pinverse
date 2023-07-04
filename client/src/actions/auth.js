import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

// trying with different codes below

// import jwt_decode from 'jwt-decode';

// export const createOrGetUser = async (response: any) => {
//     const decoded : { name: string, picture: String, sub: string } = jwt_decode(response.credential);

//     const { name, picture, sub } = decoded; 

//     const user = {
//         _id: sub,
//         _type: 'user',
//         userName: name,
//         image: picture
//     }

//     await axios.post(`http://localhost:3000/api/auth`, user);
// }