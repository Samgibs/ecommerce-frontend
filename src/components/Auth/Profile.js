import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestProfile } from '../../redux/actions/profileActions';
import { motion } from 'framer-motion';

const Profile = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(requestProfile());
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4"
    >
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="border rounded p-4 bg-white">
          <h2 className="text-xl mb-2">Profile</h2>
          <p><strong>Username:</strong> {data?.username}</p>
          <p><strong>Email:</strong> {data?.email}</p>
          <p><strong>User Type:</strong> {data?.user_type}</p>
        </div>
      )}
    </motion.div>
  );
};

export default Profile;

