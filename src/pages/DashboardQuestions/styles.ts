import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const ContentQuestion = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  > li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 10px;
    background: #fff;
    border: 0.1px solid #dcdce6;
    margin-bottom: 10px;
    width: 100%;
    background: #f2f2f7;

    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      margin: 5px 0;

      strong {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-weight: bold;
        font-size: 24px;
        color: #333;
      }
      p {
        font-weight: normal;
        font-size: 18px;
        color: #333;
      }
    }
    > span {
      padding: 30px;
      margin-top: 20px;
      align-items: center;
      background: #fff;
    }
  }
`;
