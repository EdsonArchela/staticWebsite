import styled from 'styled-components';

export const Container = styled.footer`
  border-top: 1px solid #d9d9d9;
  padding-top: 20px;
  padding-bottom: 15px;
  .logos-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    img {
      margin: 20px;
      width: 200px;
    }
  }
  .copyright-container {
    text-align: center;
    span {
      color: #68686d;
    }
  }
  @media only screen and (max-width: 600px) {
    .logos-container {
      flex-direction: column;
    }
  }
`;

export const Social = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1120px;
  a {
    margin: 0 10px;
    width: 32px;
    height: 32px;
    line-height: 32px;
    color: #68686d;
    border-radius: 50%;
    border: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background: #68686d;
      color: white;
    }
  }
`;

export const MenuBar = styled.nav`
  padding: 30px 0;
  margin: auto;
  max-width: 1120px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    li {
      border-bottom: 1px solid transparent;
      transition: border-bottom 0.2s;
      &:hover {
        border-bottom: 1px solid #9ba78a;
      }
    }
    a {
      font-size: 18px;
      color: black;
      font-family: 'Montserrat', sans-serif;
      transition: color 0.2s;
      &:hover {
        color: #9ba78a;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
