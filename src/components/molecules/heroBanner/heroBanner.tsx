import React, { FC } from 'react';
import { storyblokEditable } from '@storyblok/react';
import Link from 'components/atoms/link/link';
import Hero from 'assets/hero.webp';
import './heroBanner.css';
interface Props {
  blok: any;
}

const HeroBanner: FC<Props> = ({ blok }) => {
  return (
    <div className='theo-hero' {...storyblokEditable(blok)}>
      <h1 className='theo-hero__heading'>{blok.heading}</h1>
      <figure className='theo-hero__figure'>
        <img className='pure-img' src={Hero} alt='' />
      </figure>
      <>{console.log('first', blok.cta)}</>
      <Link blok={blok.cta[0]} />
    </div>
  );
};

export default HeroBanner;
