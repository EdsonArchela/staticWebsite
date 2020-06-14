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

import { Container } from './styles';

type SocialProps = BaseHTMLAttributes<HTMLDivElement> & {
  folder: string;
  title: string;
  size: number;
};

const SocialShare: React.FC<SocialProps> = ({ folder, title, size }) => {
  const image = require(`../../assets/articles/${folder}/image.jpg`);
  return (
    <Container>
      <FacebookShareButton
        url={`archelainvest.com.br/#/article/${folder}`}
        quote={title}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={size} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={`archelainvest.com.br/#/article/${folder}`}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={size} round />
      </TwitterShareButton>
      <PinterestShareButton
        url={`archelainvest.com.br/#/article/${folder}`}
        media={`archelainvest.com.br/${image}`}
        className="Demo__some-network__share-button"
      >
        <PinterestIcon size={size} round />
      </PinterestShareButton>
      <WhatsappShareButton
        url={`archelainvest.com.br/#/article/${folder}`}
        title={title}
      >
        <WhatsappIcon size={size} round />
      </WhatsappShareButton>
    </Container>
  );
};
export default SocialShare;
