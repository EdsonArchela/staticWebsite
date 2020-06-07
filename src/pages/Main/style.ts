import styled from 'styled-components';
import backgroundImage from '../../assets/main-post-background.jpg';

export const Container = styled.div`
  max-width: 1120px;
  padding: 0 30px 0 30px;
  margin: auto;
`;

export const Body = styled.div`
  .MainPost {
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${backgroundImage});
    div {
      flex: 1;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 70px;
      h1 {
        max-width: 500px;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        line-height: 1.5em;
      }
      p {
        max-width: 600px;
        font-size: 25px;
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
  }
`;

export const Posts = styled.section`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
