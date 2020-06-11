import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  padding: 0 30px 0 30px;
  margin: auto;
  @media only screen and (max-width: 600px) {
    padding: 0 10px 0 10px;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .contact-img {
    flex: 1;

    display: flex;
    flex-direction: column;
    img {
      height: 350px;
    }
    a {
      font-size: 8px;
    }
  }
  .content {
    margin-left: 20px;
    h1 {
      max-width: 500px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      line-height: 1.5em;
      text-align: center;
      margin-bottom: 20px;
    }
    h2 {
      font-size: 20px;
      margin-bottom: 1.5em;
    }
    a {
      color: black;
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0 0;
    .contact-img {
      img {
        height: 200px;
      }
    }
    ul {
      li {
        margin: 10px 0;
      }
    }
    button {
      margin-bottom: 15px;
    }
  }
`;
