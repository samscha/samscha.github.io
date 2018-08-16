import { u } from '../actions';

const initialState = {
  user: {},
  err: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case u.USER_LOGIN_START:
      return { ...state };

    case u.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case u.USER_LOGIN_ERROR:
      return {
        ...state,
        err: action.payload,
      };

    case u.USER_LOGIN_FINISH:
      return { ...state };

    default:
      return { ...state };
  }
};
