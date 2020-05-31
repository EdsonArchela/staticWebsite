import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100%;
    margin-bottom: 10px;
  }
  h2 {
    margin-bottom: 10px;
    text-align: center;
  }
  p {
    text-align: justify;
    margin-bottom: 10px;
  }
  button {
    background: #9ba78a;
    color: white;
    transition: background-color 0.2s;

    &:hover {
      background: black;
    }
  }
`;

export const Connect = styled.div`
  width: 100%;
  margin-top: 10px;
  border-top: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    display: flex;
    margin: 10px 0;
    p {
      margin-right: 10px;
    }
    svg,
    span {
      color: #9ba78a;
    }
  }

  .social {
    svg {
      margin-left: 10px;
    }
  }
`;
