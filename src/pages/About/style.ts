import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  padding: 0 30px 0 30px;
  margin: auto;
`;

export const Body = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px;
    max-width: 1020px;
    h1 {
      max-width: 500px;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      line-height: 1.5em;
      text-align: center;
      margin-bottom: 20px;
    }
    p {
      font-size: 25px;
      line-height: 1.5em;
      text-align: justify;
      margin-bottom: 10px;
    }
    button {
      max-width: 400px;
      background: #ededed;
      font-size: 20px;
      &:hover {
        background: #9ba78a;
        color: white;
      }
    }
  }
`;
