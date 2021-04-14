import React from 'react';
import LogoImg from '../../assets/Logo-Tractian.svg';
import { Image } from './styles';

const Logo: React.FC = () => {
  return <Image alt="Tractian" src={LogoImg} />;
};

export default Logo;
