import * as actionTypes from './actionTypes';
import axios from '../../services/general-service';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSucces = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const data = { email: email, password: password };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    };
    console.log(requestOptions);

    axios
    .post('login', data)
    .then((response) => {
      console.log(response);
      dispatch(authSucces(response.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(authFail(err));
    });
  };
};
