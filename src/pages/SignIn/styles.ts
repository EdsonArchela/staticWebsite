import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  background: #e8e8e8;
  padding: 20px;
  border-radius: 15px;
`;

const appearFromLeft = keyframes`
  from {
    opacity:0;
    transform:translateX(-50px);
    }
  to {
    opacity:1;
    transform:translateX(0);
  }

`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #666360;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#666360')};
      }
    }
  }
  > a {
    color: #6d7560;
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#6d7560')};
    }
  }

  button {
    margin-top: 24px;
    background: #9ba78a;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background: ${shade(0.2, '#9ba78a')};
      color: white;
    }
  }
`;
