import Sidebar from './Sidebar';

import * as React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  background-color: ${props => props.theme.palette.accent};
  .loading-circle {
    background: ${props => props.theme.palette.accent};
  }
`;

const Content = styled.section`
  background-color: #e3e3e3;
  flex: 1;
  border-radius: 50px;
  padding: 2rem;
  margin: 1rem 1rem 1rem 0;
  box-shadow: 7px 21px 55px -38px ${props => props.theme.palette.primary};
  display: flex;
  flex-direction: column;
`;

const PrivateWrapper = ({ children, sidebarItems }) => {
  return (
    <Main>
      <Sidebar items={sidebarItems} />
      <Content>{children}</Content>
    </Main>
  );
};

export default PrivateWrapper;