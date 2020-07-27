import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: rgba(0, 97, 166, 1);

  height: 50px;
  border-radius: 6px;
  border: 0;
  padding: 0 10px;
  color: #fff;
  width: 100%;
  font-weight: 400;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, 'rgba(0, 97, 166, 1)')};
  }
`;
