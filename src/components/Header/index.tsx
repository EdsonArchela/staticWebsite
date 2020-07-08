import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import {
  Container,
  HeaderContent,
  Social,
  MenuBar,
  HeaderLogos,
} from './style';
import WhiteMht from '../../assets/logo-manhattan.svg';
import WhiteSchool from '../../assets/logo-school-.png';
import WhiteXpi from '../../assets/logo-xpi.svg';
import TradingViewTape from '../TradingViewTape';

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
          <a
            href="https://mhtis.com.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={WhiteSchool} alt="Manhattan Investiment School" />
          </a>
          <a
            href="https://www.xpi.com.br/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={WhiteXpi} alt="XP Investimentos" />
          </a>
        </div>
      </HeaderLogos>
      <TradingViewTape />
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
            <Link to="/about">
              <strong>Edson Archela</strong>
              <span>Assessor de Investimentos - XP Investimentos</span>
            </Link>
          </div>
          <div>
            <a
              className="OpenAccount"
              href="https://cadastro.xpi.com.br/desktop/step/1?assessor=A24771"
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
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/articles">
                Artigos
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                Sobre mim
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
                Contatos
              </NavLink>
            </li>
          </ul>
        </MenuBar>
      </Container>
    </>
  );
};

export default Header;
