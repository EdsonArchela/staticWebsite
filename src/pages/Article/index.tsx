/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import '../../index.d';
import MetaTags from 'react-meta-tags';
import ReactGa from 'react-ga';

import { Container } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SocialShare from '../../components/SocialShare';

const Article: React.FC = () => {
  const { slug } = useParams();

  const input: string = require(`../../assets/articles/${slug}/post.ts`)
    .default;

  const image = require(`../../assets/articles/${slug}/image.jpg`);

  const content = ReactHtmlParser(input);

  const title = content[0].props.children[0];

  useEffect(() => {
    ReactGa.pageview(`/post/${slug}`);
  }, [slug]);

  return (
    <>
      <MetaTags>
        <title>{title}</title>
        <meta name="description" content={content[1].props.children[0]} />
      </MetaTags>
      <Header />
      <Container>
        <img src={image} alt={slug} />
        <SocialShare folder={slug} title={title} size={32} />
        <div>{content}</div>
        {/* <Markdown source={input} /> */}
      </Container>
      <Footer />
    </>
  );
};

export default Article;
