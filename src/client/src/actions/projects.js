import * as u from './utils';

const axios = u.axios;
const root = u.root;

export const PROJECTS_FETCH_START = 'PROJECTS_FETCH_START';
export const PROJECTS_FETCH_SUCCESS = 'PROJECTS_FETCH_SUCCESS';
export const PROJECTS_FETCH_ERROR = 'PROJECTS_FETCH_ERROR';
export const PROJECTS_FETCH_FINISH = 'PROJECTS_FETCH_FINISH';

/**
 * NOTE: async/await is part of ECMAScript 2017 and is not supported in Internet Explorer and older browsers, so use with caution.
 *
 * https://github.com/axios/axios
 *
 * @param {String} parm - the type of projects to fetch
 */
export const fetchProjects = parm => {
  return async dispatch => {
    dispatch({ type: PROJECTS_FETCH_START });

    try {
      console.log('here');
      const response = await axios.get(`${root}/projects/${parm}`);
      console.log(response);
      dispatch({ type: PROJECTS_FETCH_SUCCESS });
    } catch (error) {
      console.log(error);
      dispatch({ type: PROJECTS_FETCH_ERROR });
    }

    dispatch({ type: PROJECTS_FETCH_FINISH });
  };
};
