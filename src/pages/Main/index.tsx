import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Body, Posts } from './style';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Main: React.FC = () => {
  const history = useHistory();
  const [post, setPost] = useState({
    image: 'teste',
    title: 'First Post',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis risus at purus consectetur, sed iaculis turpis lacinia. Mauris dictum facilisis ex quis dapibus. Duis id lorem laoreet, sagittis sem.',
  });

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
                    routeChange('/articles/assessor-investimentos');
                  }}
                >
                  LEIA MAIS
                </Button>
              </div>
            </div>
            <div />
          </section>

          <Posts>
            <Card post={post} />
            <Card post={post} />
            <Card post={post} />
            <Card post={post} />
          </Posts>
        </Body>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
