import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ContentEnunciado = styled.div`
  padding: 30px;

  strong {
    font-size: 25px;
  }
`;

export const ContentResolucao = styled.div`
  padding: 30px;

  strong {
    font-size: 25px;
  }
`;

export const ButtonUpdate = styled(Button)`
  width: 80%;
  margin-left: 10%;
`;
