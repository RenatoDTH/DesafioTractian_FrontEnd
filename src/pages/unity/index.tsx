import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Exporting from 'highcharts/modules/exporting';
import { useHistory } from 'react-router-dom';
import { IUnits, IAssets, IUsers } from '../../models';

import {
  ContainerContent,
  Header,
  Button,
  UnityItem,
  ContentGraph,
  ButtonContainer,
  LoadAnimation,
} from '../../components';
import api from '../../services/api';

import { Container, Content, ContentItem } from './styles';

Exporting(Highcharts);

const Unity: React.FC = () => {
  const [units, setUnits] = useState<IUnits[]>([]);
  const [allUnities, setAllunities] = useState(true);
  const [unity0, setUnity0] = useState(false);
  const [unity1, setUnity1] = useState(false);
  const [assets, setAssets] = useState<IAssets[]>([]);
  const [assetsFiltered, setAssetsFiltered] = useState<IAssets[]>([]);
  const [users, setUsers] = useState<IUsers[]>([]);
  const [usersFiltered, setUsersFiltered] = useState<IUsers[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
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

  const handleAllUnities = (): void => {
    setAllunities(true);
    setUnity0(false);
    setUnity1(false);
  };

  const handleUnity1 = (): void => {
    setAllunities(false);
    setUnity0(true);
    setUnity1(false);

    setAssetsFiltered(assets.filter((asset) => asset.unitId === 1));
    setUsersFiltered(users.filter((user) => user.unitId === 1));
  };

  const handleUnity2 = (): void => {
    setAllunities(false);
    setUnity0(false);
    setUnity1(true);

    setAssetsFiltered(assets.filter((asset) => asset.unitId === 2));
    setUsersFiltered(users.filter((user) => user.unitId === 2));
  };

  const option = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      backgroundColor: '#f8f8f8',
      borderRadius: 12,
    },
    title: {
      text: 'Unidade',
      align: 'center',
      verticalAlign: 'middle',
      y: 60,
    },
    tooltip: {
      pointFormat:
        '{series.name} <b>{point.percentage:.1f}%</b> </br>' +
        '{series.name} <b>{point.y}</b><br/>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white',
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%',
      },
    },
    series: [
      {
        type: 'pie',
        name: '',
        innerSize: '50%',
        data: [
          ['Usu??rios', usersFiltered.length],
          ['Ativos', assetsFiltered.length],
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <ButtonContainer>
            <Button onClick={handleAllUnities}>
              {isLoading ? 'Carregando' : 'Todas as unidades'}
            </Button>
            <Button onClick={handleUnity1}>
              {isLoading ? 'Carregando' : units[0]?.name}
            </Button>
            <Button onClick={handleUnity2}>
              {isLoading ? 'Carregando' : units[1]?.name}
            </Button>
          </ButtonContainer>
          <Content>
            {isLoading ? (
              <LoadAnimation />
            ) : (
              <>
                {allUnities && (
                  <>
                    <ContentItem>
                      {units.map((unity: IUnits) => (
                        <UnityItem key={unity.id} unity={unity} />
                      ))}
                    </ContentItem>
                    <p>
                      Estas unidades s??o os destaques no ramo da Tractian e o
                      futuro pode aguardar novas surpresas
                    </p>
                  </>
                )}
                {unity0 && (
                  <ContentGraph>
                    <HighchartsReact highcharts={Highcharts} options={option} />
                  </ContentGraph>
                )}
                {unity1 && (
                  <ContentGraph>
                    <HighchartsReact highcharts={Highcharts} options={option} />
                  </ContentGraph>
                )}
              </>
            )}
          </Content>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Unity;
