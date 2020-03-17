import React from 'react';
import styled from 'styled-components';

interface AppProps {
  name: string;
}
export const Container = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export default function App({ name }: AppProps) {
  return <Container>Hello {name}!</Container>;
}
