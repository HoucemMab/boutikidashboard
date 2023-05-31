import React from 'react';
import SignupGraph from './SignupGraph';
import StatisticsClassicCard from '../../../../@jumbo/components/Common/StatisticsClassicCard';
import { useState } from 'react';
import { useEffect } from 'react';

const OnlineSignups = () => {
  const [number, setNumber] = useState(0);
  function getNumberOfElementsFromAPI() {
    fetch('http://localhost:3005/product')
      .then(response => response.json())
      .then(data => {
        const numberOfElements = data.length;
        console.log('Number of elements:', numberOfElements);
        setNumber(numberOfElements);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  useEffect(() => {
    getNumberOfElementsFromAPI();
    console.log(number);
  }, []);
  return (
    <StatisticsClassicCard
      backgroundColor={['#E2EEFF -18.96%', '#fff 108.17%']}
      gradientDirection="180deg"
      color={'#0062FF'}
      title={number}
      subTitle={'Online Signups'}
      growth={1.5}>
      <SignupGraph />
    </StatisticsClassicCard>
  );
};

export default OnlineSignups;
