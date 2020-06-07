import React from 'react';
import { Container, Body } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Main: React.FC = () => (
  <>
    <Header />
    <Container>
      <Body>
        <section className="content">
          <h1>Edson Archela</h1>
          <p>
            Olá, minha história no mundo dos investimentos teve início durante o
            período em que estava fazendo doutorado na Universidade Estadual de
            Londrina, na época, também trabalhava como docente neste
            instituição. Com o tempo que me sobrava comecei a estudar sobre o
            mercado financeiro. No ínicio era qualquer outro brasileiro,
            guardava meu suado dinheiro na poupança, que não rendia muito. Logo
            que comecei a aprender sobre o mercado financeiro conheci os
            investimentos do Tesouro Direto, que garantia mais segurança por uma
            rentabilidade muitas vezes maior. Depois fui me fabiliarizando com
            as nomenclaturas do mercado, como CDI, CDB, SELIC, LCI, LCA etc. Por
            fim, comecei a investir em ações. Um ano depois, estava ajudando a
            gerir o dinheiro de minha família.{' '}
          </p>
          <p>
            Com este aumento de responsabilidade senti a necessidade de
            formalizar e aprofundar meus conhecimentos do mercado financeiro.
            Então iniciei um MBA na área de finanças. Nele aprendi tudo sobre o
            mercado institucional brasileiro e americano. Aprendi sobre as
            estratégias mais utilizadas pelas maiores instituições financeiras.
            Terminado o MBA, então, prestei a prova da Anbima para me tornar
            Assessor de Investimentos. Tornando-me sócio do escritório de
            assessores de investimento Mahanttan Investimentos, um escritório
            credenciado a XP Investimentos. Se deseja saber mais sobre a relação
            entre a Manhattan Investimentos e a XP Investimentos{' '}
            <a href="https://www.mhtinvestimentos.com.br/">clique aqui</a>.
          </p>
        </section>
      </Body>
      <Footer />
    </Container>
  </>
);

export default Main;
