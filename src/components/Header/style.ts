import styled from 'styled-components';

export const Container = styled.header`
  padding: 32px 0 0 0;
`;

export const HeaderLogos = styled.div`
  width: 100vw;
  background: black;
  margin: auto;
  .header-logo-container {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
      width: 300px;
    }
  }
  @media only screen and (max-width: 600px) {
    .header-logo-container {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      /* flex-direction: column; */
      img {
        margin: 10px;
        height: 20px;
        width: 100px;
      }
    }
  }
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 32px;
  border-bottom: 1px solid #d9d9d9;
  .header-principal {
    flex: 1;

    a {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: black;
      strong {
        font-weight: bolder;
        font-size: 30px;
      }
      span {
        color: #68686d;
      }
    }
  }

  .OpenAccount {
    margin-left: auto;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #dedede;
    padding: 10px 20px;
    color: black;
    width: 100%;
    font-weight: 500;
    transition: background-color 0.2s, color 0.2s;
    font-family: 'Montserrat', sans-serif;
    &:hover {
      background: #9ba78a;
      color: white;
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    .header-principal {
      margin-bottom: 20px;
    }
  }
`;

export const Social = styled.div`
  display: flex;
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
      &:hover,
      > a.active {
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
    .active {
      color: #9ba78a;
    }
  }
`;
