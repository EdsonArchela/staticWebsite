/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import ReactHtmlParser from 'react-html-parser';
import { Container } from './style';

const Article: React.FC = () => {
  const { slug } = useParams();

  const input: string = require(`../../assets/articles/${slug}/post2.ts`)
    .default;

  const image = require(`../../assets/articles/${slug}/image.jpg`);
  return (
    <Container>
      <img src={image} alt={slug} />
      <div>{ReactHtmlParser(input)}</div>
      {/* <Markdown source={input} /> */}
    </Container>
  );
};

export default Article;
