import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logoManhattan from '../../assets/logo-manhattan.png';
import LogoSchool from '../../assets/logo-school.jpg';
import logoXP from '../../assets/xp-investimentos-logo.svg';
import { Container, MenuBar, Social } from './style';

const Footer: React.FC = () => (
  <Container>
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
    <div className="logos-container">
      <a
        href="https://www.mhtinvestimentos.com.br/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={logoManhattan} alt="Manhattan Investimentos" />
      </a>
      <a href="https://mhtis.com.br/" rel="noopener noreferrer" target="_blank">
        <img src={LogoSchool} alt="Manhattan Investiment School" />
      </a>
      <a
        href="https://www.xpi.com.br/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={logoXP} alt="Xp Investimentos" />
      </a>
    </div>
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
    <div className="copyright-container">
      <span>Powered by</span>{' '}
      <a
        href="https://github.com/EdsonArchela"
        rel="noopener noreferrer"
        target="_blank"
      >
        TechArc Websites
      </a>
    </div>
  </Container>
);
export default Footer;
