import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Exporting from 'highcharts/modules/exporting';
import { useHistory } from 'react-router-dom';
import {
  ContainerContent,
  Header,
  ContentGraph,
  LoadAnimation,
} from '../../components';
import { ICompanies, IUnits, IAssets, IUsers } from '../../models';
import api from '../../services/api';

import { Container, TextContent } from './styles';

Exporting(Highcharts);

const Companies: React.FC = () => {
  const [companies, setCompanies] = useState<ICompanies[]>([]);
  const [units, setUnits] = useState<IUnits[]>([]);
  const [assets, setAssets] = useState<IAssets[]>([]);
  const [users, setUsers] = useState<IUsers[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      api.get('companies').then((response) => {
        if (response.status === 408) {
          history.push('/error408');
        } else {
          setCompanies(response.data);
        }
      });

      api.get('units').then((response) => {
        if (response.status === 408) {
          history.push('/error408');
        } else {
          setUnits(response.data);
        }
      });

      api.get('assets').then((response) => {
        if (response.status === 408) {
          history.push('/error408');
        } else {
          setAssets(response.data);
        }
      });

      api.get('users').then((response) => {
        if (response.status === 408) {
          history.push('/error408');
        } else {
          setUsers(response.data);
        }
      });
      setIsLoading(false);
    }, 1 * 500);
  }, [history]);

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
          {isLoading ? (
            <LoadAnimation />
          ) : (
            <>
              <TextContent>
                <p>
                  A Tractian conhecida pelo monitoramento de máquinas com sua
                  própria tecnlogia tem crescido a cada ano.
                </p>
                <p>
                  Hoje nós temos {companies.length}{' '}
                  {companies.length === 1 ? 'empresa' : 'empresas'} e possuímos
                  em nossas dependências {units.length}{' '}
                  {units.length === 1 ? ' unidade' : ' unidades'} que se
                  destacam das mais diversas formas.
                </p>
                <p>
                  Possuímos exatos {assets.length}{' '}
                  {assets.length === 1 ? 'ativo' : 'ativos'} e {users.length}{' '}
                  {users.length === 1 ? 'usuário' : 'usuários'} ativos no
                  momento.
                </p>
                <p>
                  Os planos para o futuro é apresentar uma estratégia mais
                  agressiva para o <span>crescimento</span> da empresa.
                </p>

                <p>Segue os dados base como exemplo da {companies[0]?.name}:</p>
              </TextContent>
              <ContentGraph>
                <HighchartsReact highcharts={Highcharts} options={option} />
              </ContentGraph>
            </>
          )}
        </ContainerContent>
      </Container>
    </>
  );
};

export default Companies;
