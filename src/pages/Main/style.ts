import styled from 'styled-components';
import backgroundImage from '../../assets/main-post-background.jpg';

export const Container = styled.div`
  max-width: 1120px;
  padding: 0 30px 0 30px;
  margin: auto;
  @media only screen and (max-width: 600px) {
    padding: 0 5px 0 5px;
  }
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

    @media only screen and (max-width: 600px) {
      .empty {
        display: none;
      }
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
      @media only screen and (max-width: 600px) {
        padding: 0;
        margin: 10px;
        h1 {
          max-width: 500px;
          text-align: center;
          font-size: 1.5em;
          font-weight: bold;
          line-height: 1.5em;
        }
        p {
          max-width: 600px;
          font-size: 1em;
          text-align: justify;
          margin-bottom: 10px;
        }
        button {
          max-width: 400px;
          background: #ededed;
          font-size: 1em;
          &:hover {
            background: #9ba78a;
            color: white;
          }
        }
      }
    }
  }

  .MainPostMobile {
    img {
      width: 100%;
    }
    button {
      margin-top: 15px;
      max-width: 400px;
      background: transparent;
      border: 1px solid #9ba78a;
    }
  }
`;

export const Posts = styled.section`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
