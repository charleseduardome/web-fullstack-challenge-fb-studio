import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: linear-gradient(
    90deg,
    rgba(0, 97, 166, 1) 10%,
    rgba(1, 175, 104, 1) 100%
  );
  img {
    margin-left: 20px;
    width: 120px;
    height: auto;
  }
  strong {
    font-size: 25px;
    margin-right: 20px;
    color: #fff;
  }
`;
