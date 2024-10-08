import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAIL } from '../constants/profileConstants';

const initialState = {
  loading: false,
  data: {},
  error: null,
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_REQUEST:
      return { ...state, loading: true };
    case PROFILE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case PROFILE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
