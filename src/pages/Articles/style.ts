import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  padding: 0 30px 0 30px;
  margin: auto;
  @media only screen and (max-width: 600px) {
    padding: 0 5px 0 5px;
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
