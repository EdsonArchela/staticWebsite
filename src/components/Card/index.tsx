/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React, { BaseHTMLAttributes } from 'react';
import {
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
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
        <div className="social">
          <FacebookShareButton
            url={`archelainvest.com.br/#/article/${post.folder}`}
            quote={post.title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={18} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={`archelainvest.com.br/#/article/${post.folder}`}
            title={post.title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={18} round />
          </TwitterShareButton>
          <PinterestShareButton
            url={`archelainvest.com.br/#/article/${post.folder}`}
            media={`archelainvest.com.br/${image}`}
            className="Demo__some-network__share-button"
          >
            <PinterestIcon size={18} round />
          </PinterestShareButton>
          <WhatsappShareButton
            url={`archelainvest.com.br/#/article/${post.folder}`}
            title={post.title}
          >
            <WhatsappIcon size={18} round />
          </WhatsappShareButton>
        </div>
      </Connect>
    </Container>
  );
};

export default Card;
