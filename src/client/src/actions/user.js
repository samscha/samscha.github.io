// import axios from 'axios';
// import { root } from '../index';
// import { SubmissionError } from 'redux-form';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGIN_FINISH = 'USER_LOGIN_FINISH';

export const authenticate = (user, history) => {
  return dispatch => {
    dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
    history.push('/dashboard');
  };
};

export const login = (user, history) => {
  return dispatch => {
    //   dispatch({ type: USER_LOGIN_START });
    //   // axios
    //   //   .post(`${root}/users/login`, user)
    //   //   .then(({ data }) => {
    //   dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
    //   dispatch({ type: USER_LOGIN_FINISH });
    //   history.push('/dashboard');
    //   // })
    //   // .catch(err => {
    //   return err.response.data.message;
    //   // dispatch({
    //   //   type: USER_LOGIN_ERROR,
    //   //   payload: err.response.data.message,
    //   // });
    //   // dispatch({ type: USER_LOGIN_FINISH });
    //   throw new SubmissionError({
    //     password: err.response.data.message,
    //   });
    // });
    // history.push('/dashboard');
    // axios
    //   .post(`${root}/users/login`, user)
    //   .then(({ data }) => {
    //     history.push('/');
    //   })
    //   .catch(err => {
    //     // dispatch({
    //     //   type: USER_LOGIN_ERROR,
    //     //   payload: err.response.data.message,
    //     // });
    //     // dispatch({ type: USER_LOGIN_FINISH });
    //     throw new SubmissionError({
    //       password: err.response.data.message,
    //     });
    //   });
    // console.log('user', user);
    //   axios
    //     .post(`${root}/users/login/check`, { email })
    //     .then(({ data }) => {
    //       dispatch({ type: USER_CHECK_SUCCESS, payload: data.email });
    //       dispatch({ type: USER_CHECK_FINISH });
    //     })
    //     .catch(err => {
    //       dispatch({
    //         type: USER_CHECK_ERROR,
    //         payload: err.response.data.message,
    //       });
    //       dispatch({ type: USER_CHECK_FINISH });
    //     });
  };
};
