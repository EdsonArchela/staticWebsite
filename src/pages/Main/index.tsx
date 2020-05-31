import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Social,
  Fotter,
  Body,
  MenuBar,
  Posts,
} from './style';
import Button from '../../components/Button';
import logoManhattan from '../../assets/logo-manhattan.png';
import logoXP from '../../assets/xp-investimentos-logo.svg';
import Card from '../../components/Card';

const Main: React.FC = () => {
  const [post, setPost] = useState({
    image: 'teste',
    title: 'First Post',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis risus at purus consectetur, sed iaculis turpis lacinia. Mauris dictum facilisis ex quis dapibus. Duis id lorem laoreet, sagittis sem.',
  });

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Social>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </Social>
          <div className="header-principal">
            <strong>Edson Archela</strong>
            <span>Acessor de Investimentos - XP Investimentos</span>
          </div>
          <div>
            <Button>Inscreva-se</Button>
          </div>
        </HeaderContent>
      </Header>
      <Body>
        <MenuBar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Contate-me</Link>
            </li>
            <li>
              <Link to="/">Sobre mim</Link>
            </li>
          </ul>
        </MenuBar>
        <section className="MainPost">
          <div className="content">
            <h1>O que faz um Assessor de Investimentos?</h1>
            <p>
              Conversar com alguém que acompanha o mercado diariamente pode
              fazer toda a diferença na hora de investir seu dinheiro. Leia mais
              e descubra as vantagens de ter um Assessor de Investimentos!
            </p>
            <div>
              <Button>LEIA MAIS</Button>
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
      <Fotter>
        <img src={logoManhattan} alt="Manhattan Investimentos" />
        <img src={logoXP} alt="Xp Investimentos" />
      </Fotter>
    </Container>
  );
};

export default Main;
