import React from 'react';
import { IUnits, ICompanies } from '../../models';

import { Container } from './styles';

export interface IUnityItemProps {
  unity: IUnits;
}

const UnityItem: React.FC<IUnityItemProps> = ({ unity }) => {
  return (
    <Container>
      <strong>{unity.name}</strong>
      <span>{unity.companyId === 1 && 'Empresa Teste'}</span>
    </Container>
  );
};

export default UnityItem;
