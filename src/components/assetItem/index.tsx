import React from 'react';
import { IAssets } from '../../models';

import { Container } from './styles';

export interface IAssetItemProps {
  asset: IAssets;
}

const UnityItem: React.FC<IAssetItemProps> = ({ asset }) => {
  return (
    <Container>
      <img src={asset.image} alt={asset.name} />
      <strong>{asset.name}</strong>
      <span>Modelo: {asset.model}</span>
      <span>Sensor: {asset.sensors}</span>
      <button type="button">Faz alguma coisa</button>
    </Container>
  );
};

export default UnityItem;
