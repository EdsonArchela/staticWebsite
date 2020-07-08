import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  max-width: 1120px;
  display: flex;
  /* overflow: hidden; */
  height: 100%;
`;
export const Post = styled.article`
  flex: 1 1 100px;
  order: 0;
  height: 100%;
  padding: 0 30px 0 30px;
  margin: auto;
  margin-bottom: 20px;

  img {
    width: 100%;
    margin: 10px 0;
  }
  h1,
  h2 {
    margin: 20px 0;
  }
  p {
    line-height: 1.5em;
    text-align: justify;
    text-indent: 2em;
  }

  ul {
    list-style-type: circle;
    margin-left: 40px;
  }
`;
export const SideBar = styled.aside`
  @media only screen and (max-width: 600px) {
    display: none;
  }
  flex: 0 0 256px;
  order: 1;
  overflow: auto;
  border-left: 1px solid #d9d9d9;
  padding: 0 25px;
  h1 {
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 10px;
    margin-bottom: 2rem;
  }
  ul {
    display: flex;
    flex-direction: column;

    li {
      list-style: disc;
      margin: 1rem 0;
    }
  }
`;
