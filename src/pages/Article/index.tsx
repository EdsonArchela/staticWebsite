/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { Container } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Article: React.FC = () => {
  const { slug } = useParams();

  const input: string = require(`../../assets/articles/${slug}/post.ts`)
    .default;

  const image = require(`../../assets/articles/${slug}/image.jpg`);
  return (
    <>
      <Header />
      <Container>
        <img src={image} alt={slug} />
        <div>{ReactHtmlParser(input)}</div>
        {/* <Markdown source={input} /> */}
      </Container>
      <Footer />
    </>
  );
};

export default Article;
