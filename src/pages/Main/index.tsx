import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Body, Posts } from './style';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { posts as postsList } from '../../assets/articles/index';

interface Post {
  folder: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

const Main: React.FC = () => {
  const history = useHistory();
  const posts: Post[] = postsList;

  const routeChange = (path: string): void => {
    history.push(path);
  };

  return (
    <>
      <Header />
      <Container>
        <Body>
          <section className="MainPost">
            <div className="content">
              <h1>O que faz um Assessor de Investimentos?</h1>
              <p>
                Conversar com alguém que acompanha o mercado diariamente pode
                fazer toda a diferença na hora de investir seu dinheiro. Leia
                mais e descubra as vantagens de ter um Assessor de
                Investimentos!
              </p>
              <div>
                <Button
                  onClick={() => {
                    routeChange('/article/assessor-investimentos');
                  }}
                >
                  LEIA MAIS
                </Button>
              </div>
            </div>
            <div className="empty" />
          </section>

          <Posts>
            {posts.map((_post) => {
              return <Card post={_post} key={_post.folder} />;
            })}
          </Posts>
        </Body>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
