import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  Container,
  HeaderContent,
  Social,
  MenuBar,
  HeaderLogos,
} from './style';
import WhiteMht from '../../assets/logo-mht.png';
import WhiteG20 from '../../assets/logo-g20.png';
import WhiteXpi from '../../assets/logo-xpi.svg';

const Header: React.FC = () => {
  return (
    <>
      <HeaderLogos>
        <div className="header-logo-container">
          <a
            href="https://www.mhtinvestimentos.com.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={WhiteMht} alt="Manhattan Investimentos" />
          </a>
          <img src={WhiteG20} alt="Manhattan Investimentos" />
          <a
            href="https://www.xpi.com.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={WhiteXpi} alt="XP Investimentos" />
          </a>
        </div>
      </HeaderLogos>
      <Container>
        <HeaderContent>
          <Social>
            <a
              href="https://www.facebook.com/edson.archela/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/edson_archela/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/edson-archela-36303b148"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </Social>
          <div className="header-principal">
            <strong>Edson Archela</strong>
            <span>Acessor de Investimentos - XP Investimentos</span>
          </div>
          <div>
            <a
              className="OpenAccount"
              href="http://www.xpi.com.br/aai/#/passo/1?assessor-A24771"
              rel="noopener noreferrer"
              target="_blank"
            >
              Abra sua conta
            </a>
          </div>
          <div />
        </HeaderContent>
        <MenuBar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Artigos</Link>
            </li>
            <li>
              <Link to="/about">Sobre mim</Link>
            </li>
            <li>
              <Link to="/contact">Contate-me</Link>
            </li>
          </ul>
        </MenuBar>
      </Container>
    </>
  );
};

export default Header;
