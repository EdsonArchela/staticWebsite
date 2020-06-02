import styled from 'styled-components';
import backgroundImage from '../../assets/main-post-background.jpg';

export const Container = styled.header`
  padding: 32px 0 0 0;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    strong {
      font-weight: bolder;
      font-size: 30px;
    }
    span {
      color: #68686d;
    }
  }

  button {
    margin-left: auto;
    background: transparent;
    color: #000000;
    border-color: #dedede;
    border-width: 1px;
    border-style: solid;
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
      transition: color 0.2s;
      &:hover {
        color: #9ba78a;
      }
    }
  }
`;
