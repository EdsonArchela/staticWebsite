import React, { BaseHTMLAttributes } from 'react';
import {
  FaComment,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';
import Button from '../Button';
import { Container, Connect } from './styles';

interface Post {
  image: string;
  title: string;
  content: string;
}

type CardProps = BaseHTMLAttributes<HTMLDivElement> & {
  post: Post;
};

const Card: React.FC<CardProps> = ({ children, post, ...rest }) => (
  <Container>
    <img src="https://picsum.photos/500/375" alt="#" />
    <h2>Post Title</h2>
    <p>{post.content}</p>
    <div>
      <Button>LEIA MAIS</Button>
    </div>
    <Connect>
      <div className="info">
        <p>Maio 10, 2020</p>
        <FaComment /> <span>1</span>
      </div>
      <div className="social">
        <FaFacebook />
        <FaTwitter />
        <FaPinterest />
      </div>
    </Connect>
  </Container>
);

export default Card;
