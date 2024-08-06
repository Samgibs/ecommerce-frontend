import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestProfile } from '../../redux/actions/profileActions';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(requestProfile());
  }, [dispatch]);

  return (
    <div>
      {profile.loading ? (
        <p>Loading...</p>
      ) : profile.error ? (
        <p>Error: {profile.error}</p>
      ) : (
        <div>
          <h1>{profile.data.name}</h1>
          <p>{profile.data.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;

