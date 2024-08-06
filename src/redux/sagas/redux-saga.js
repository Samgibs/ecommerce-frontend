export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const loginRequest = (data) => ({ type: LOGIN_REQUEST, payload: data });
export const loginSuccess = (data) => ({ type: LOGIN_SUCCESS, payload: data });
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const registerRequest = (data) => ({ type: REGISTER_REQUEST, payload: data });
export const registerSuccess = (data) => ({ type: REGISTER_SUCCESS, payload: data });
export const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const logoutRequest = () => ({ type: LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const logoutFailure = (error) => ({ type: LOGOUT_FAILURE, payload: error });
