/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { BaseHTMLAttributes } from 'react';

import { useHistory } from 'react-router-dom';
import Button from '../Button';
import SocialShare from '../SocialShare';
import { Container, Connect } from './styles';

interface PostProp {
  folder: string;
  image: string;
  title: string;
  description: string;
  date: string;
}

type CardProps = BaseHTMLAttributes<HTMLDivElement> & {
  post: PostProp;
};

const Card: React.FC<CardProps> = ({ post }) => {
  const image = require(`../../assets/articles/${post.folder}/image.jpg`);
  const history = useHistory();
  const handleReadMoreClick = (): void => {
    history.push(`/article/${post.folder}`);
  };

  return (
    <Container>
      <img src={image} alt="#" />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <div>
        <Button onClick={handleReadMoreClick}>LEIA MAIS</Button>
      </div>
      <Connect>
        <div className="info">
          <p>{post.date}</p>
        </div>
        <SocialShare folder={post.folder} title={post.title} size={20} />
      </Connect>
    </Container>
  );
};

export default Card;
