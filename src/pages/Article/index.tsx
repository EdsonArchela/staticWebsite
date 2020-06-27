/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import '../../index.d';
import MetaTags from 'react-meta-tags';
import ReactGa from 'react-ga';

import { Container, Post, SideBar } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SocialShare from '../../components/SocialShare';
import { posts as postsList } from '../../assets/articles/index';

interface Post {
  folder: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

const Article: React.FC = () => {
  const { slug } = useParams();

  const posts: Post[] = postsList;

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
        <Post>
          {' '}
          <img src={image} alt={slug} />
          <SocialShare folder={slug} title={title} size={32} />
          <div>{content}</div>
        </Post>
        <SideBar>
          <h1>Veja outros Artigos</h1>
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.title}>
                  {' '}
                  <Link to={`/article/${post.folder}`}>{post.title}</Link>
                </li>
              );
            })}
          </ul>
        </SideBar>
      </Container>
      <Footer />
    </>
  );
};

export default Article;
