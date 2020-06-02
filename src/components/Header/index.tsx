import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, HeaderContent, Social, MenuBar } from './style';
import Button from '../Button';
import { useAuth } from '../../hooks/AuthContext';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  console.log(user);
  return (
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
          {user ? (
            <Button onClick={signOut}>SignOut</Button>
          ) : (
            <Link to="/signin">
              <Button>SignIn</Button>
            </Link>
          )}
          {user && user.admin && <Link to="/create-post">CreatePost</Link>}
        </div>
      </HeaderContent>
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
    </Container>
  );
};

export default Header;
