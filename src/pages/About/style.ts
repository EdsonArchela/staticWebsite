import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  padding: 0 30px 0 30px;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Body = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px;
    max-width: 1020px;
    img {
      width: 200px;
      border-radius: 50%;
    }
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
  }
  @media only screen and (max-width: 600px) {
    .content {
      padding: 1px !important;
      h1 {
        width: 100%;
        font-size: 2em;
      }
      p {
        font-size: 1em;
      }
    }
  }
`;
