import { p } from '../actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case p.PROJECTS_FETCH_SUCCESS:
      return [...state, ...action.payload];

    default:
      return [...state];
  }
};
