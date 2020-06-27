import React, { useEffect } from 'react';
import ReactGa from 'react-ga';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Posts } from './style';
import { posts as postsList } from '../../assets/articles/index';
import Card from '../../components/Card';

interface Post {
  folder: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

const Articles: React.FC = () => {
  const posts: Post[] = postsList;
  useEffect(() => {
    ReactGa.pageview('/articles');
  }, []);
  return (
    <>
      <Header />
      <Container>
        <Posts>
          {posts.map((_post) => {
            return <Card post={_post} key={_post.folder} />;
          })}
        </Posts>
        <Footer />
      </Container>
    </>
  );
};

export default Articles;
