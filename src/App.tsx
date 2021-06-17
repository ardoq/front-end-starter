import React from 'react';
import styled from 'styled-components';

interface AppProps {
  name: string;
}

const Container = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const App = ({ name }: AppProps) => {
  return <Container>Hello {name}!</Container>;
};

export default App;
