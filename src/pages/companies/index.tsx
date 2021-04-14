import React, { useEffect, useState } from 'react';
import { ContainerContent, Header } from '../../components';
import { ICompanies, IUnits, IAssets, IUsers } from '../../models';
import api from '../../services/api';

import { Container } from './styles';

const Companies: React.FC = () => {
  const [companies, setCompanies] = useState<ICompanies[]>([]);
  const [units, setUnits] = useState<IUnits[]>([]);
  const [assets, setAssets] = useState<IAssets[]>([]);
  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    api.get('companies').then((response) => {
      setCompanies(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('units').then((response) => {
      setUnits(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('assets').then((response) => {
      setAssets(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <p>
            A Tractian conhecida pelo monitoramento de máquinas com sua própria
            tecnlogia tem crescido a cada ano.
          </p>
          <p>
            Hoje nós temos {companies.length}{' '}
            {companies.length === 1 ? 'empresa' : 'empresas'} e possuímos em
            nossas dependências {units.length}{' '}
            {units.length === 1 ? ' unidade' : ' unidades'} que se destacam das
            mais diversas formas.
          </p>
          <p>
            Possuímos exatos {assets.length}{' '}
            {assets.length === 1 ? 'ativo' : 'ativos'} e {users.length}{' '}
            {users.length === 1 ? 'usuário' : 'usuários'} ativos no momento.
          </p>
          <p>
            Os planos para o futuro é apresentar uma estratégia mais agressiva
            para o <span>crescimento</span> da empresa.
          </p>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Companies;
