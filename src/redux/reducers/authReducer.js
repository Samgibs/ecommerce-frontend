const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  error: null,
  successMessage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
    case 'LOGOUT_REQUEST':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return { ...state, isAuthenticated: true, user: action.payload, loading: false };
    case 'LOGOUT_SUCCESS':
      return { ...state, isAuthenticated: false, user: {}, loading: false };
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
    case 'LOGOUT_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
