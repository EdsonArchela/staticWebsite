import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Article from '../../components/Article';
import { Container } from './style';

const Articles: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Article />
      </Container>
      <Footer />
    </>
  );
};

export default Articles;
