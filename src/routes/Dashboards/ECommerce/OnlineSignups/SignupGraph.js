import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import Box from '@material-ui/core/Box';
import { eCommerce } from '../../../../@fake-db';
import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';
import { getAuth, listUsers } from 'firebase/auth';

const SignupGraph = () => {
  const { onlineSignups } = eCommerce;
  const app = initializeApp({
    apiKey: 'AIzaSyCw2v7AFJsSyTm5LfhXN3F4OT-G0l_hQyY',
    authDomain: 'ecommerce-539b0.firebaseapp.com',
    projectId: 'ecommerce-539b0',
    storageBucket: 'ecommerce-539b0.appspot.com',
    messagingSenderId: '647019079940',
    appId: '1:647019079940:web:100169b153c0f9e593c851',
  });
  // useEffect(() => {
  //   const auth = getAuth();
  //   const getUsers = async () => {
  //     const result = await listUsers(auth);
  //     console.log('Users List ', result);
  //   };
  //   getUsers();
  // }, []);
  return (
    <ResponsiveContainer width="100%" height={120}>
      <LineChart data={onlineSignups} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Tooltip
          cursor={false}
          content={({ active, label, payload }) => {
            return active ? (
              <Box color="#fff">
                {payload.map((row, index) => (
                  <Box key={index}>{`${label}: ${row.value} Signups`}</Box>
                ))}
              </Box>
            ) : null;
          }}
          wrapperStyle={{
            background: '#0062FF',
            padding: '5px 8px',
            borderRadius: 4,
            overflow: 'hidden',
          }}
        />
        <XAxis dataKey="month" hide />
        <Line dataKey="count" type="monotone" dot={null} strokeWidth={3} stackId="2" stroke="#0062FF" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SignupGraph;
