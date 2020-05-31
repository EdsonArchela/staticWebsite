import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 5px;
  border: 0;
  padding: 10px 20px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background: ${shade(0.2, '#9ba78a')};
    color: white;
  }
`;
