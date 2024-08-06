import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAIL } from '../constants/profileConstants';

export const requestProfile = () => ({
  type: PROFILE_REQUEST,
});

export const profileSuccess = (data) => ({
  type: PROFILE_SUCCESS,
  payload: data,
});

export const profileFail = (error) => ({
  type: PROFILE_FAIL,
  payload: error,
});

