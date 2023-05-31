import React from 'react';
import styled from 'styled-components';

const UnauthorizedPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const UnauthorizedPage = () => {
  return (
    <UnauthorizedPageWrapper>
      <Title>Unauthorized</Title>
      <Message>You are not authorized to access this page.</Message>
    </UnauthorizedPageWrapper>
  );
};

export default UnauthorizedPage;
