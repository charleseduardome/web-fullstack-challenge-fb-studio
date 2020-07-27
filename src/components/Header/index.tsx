import React from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/logoImg.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Sync" />
        <div>
          <strong>FB Quest</strong>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
