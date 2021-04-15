import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Exporting from 'highcharts/modules/exporting';
import { ContainerContent, Header } from '../../components';
import { ICompanies, IUnits, IAssets, IUsers } from '../../models';
import api from '../../services/api';

import { Container, ContainerGraph, TextContent } from './styles';

Exporting(Highcharts);

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

  const option = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      backgroundColor: '#f8f8f8',
      borderRadius: 12,
    },

    title: {
      text: `Informações da empresa ${companies[0]?.name}`,
    },
    tooltip: {
      pointFormat:
        '{series.name}: <b>{point.percentage:.1f}%</b> <br/>' +
        '{series.name}: <b>{point.y}</b><br/>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: 'Data',
        colorByPoint: true,
        data: [
          {
            name: 'Empresa',
            y: companies.length,
            sliced: true,
            selected: true,
          },
          {
            name: 'Unidades',
            y: units.length,
          },
          {
            name: 'Ativos',
            y: assets.length,
          },
          {
            name: 'Usuários',
            y: users.length,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <TextContent>
            <p>
              A Tractian conhecida pelo monitoramento de máquinas com sua
              própria tecnlogia tem crescido a cada ano.
            </p>
            <p>
              Hoje nós temos {companies.length}{' '}
              {companies.length === 1 ? 'empresa' : 'empresas'} e possuímos em
              nossas dependências {units.length}{' '}
              {units.length === 1 ? ' unidade' : ' unidades'} que se destacam
              das mais diversas formas.
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

            <p>Segue os dados base como exemplo da {companies[0]?.name}:</p>
          </TextContent>
          <ContainerGraph>
            <HighchartsReact highcharts={Highcharts} options={option} />
          </ContainerGraph>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Companies;
