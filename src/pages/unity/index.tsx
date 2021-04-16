import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Exporting from 'highcharts/modules/exporting';
import { IUnits, IAssets, IUsers } from '../../models';
import {
  ContainerContent,
  Header,
  Button,
  UnityItem,
  ContentGraph,
  ButtonContainer,
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
          ['Usuários', usersFiltered.length],
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
            <Button onClick={handleAllUnities}>Todas as unidades</Button>
            <Button onClick={handleUnity1}>{units[0]?.name}</Button>
            <Button onClick={handleUnity2}>{units[1]?.name}</Button>
          </ButtonContainer>
          <Content>
            {allUnities && (
              <>
                <ContentItem>
                  {units.map((unity: IUnits) => (
                    <UnityItem key={unity.id} unity={unity} />
                  ))}
                </ContentItem>
                <p>
                  Estas unidades são os destaques no ramo da Tractian e o futuro
                  pode aguardar novas surpresas
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
          </Content>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Unity;
