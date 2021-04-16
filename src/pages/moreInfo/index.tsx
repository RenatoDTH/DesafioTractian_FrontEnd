import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Exporting from 'highcharts/modules/exporting';
import {
  Button,
  ContainerContent,
  Header,
  ContentGraph,
  ButtonContainer,
} from '../../components';
import { IAssets } from '../../models';
import api from '../../services/api';

import { Container, Content, TextContent } from './styles';

Exporting(Highcharts);

const MoreInfo: React.FC = () => {
  const [assets, setAssets] = useState<IAssets[]>([]);
  const [healthButton, setHealthButton] = useState(true);
  const [power, setPower] = useState(false);
  const [rotation, setRotation] = useState(false);
  const [collectUpTime, setCollectUpTime] = useState(false);

  useEffect(() => {
    api.get('assets').then((response) => {
      setAssets(response.data);
    });
  }, []);

  const handleHealthButton = (): void => {
    setHealthButton(true);
    setPower(false);
    setRotation(false);
    setCollectUpTime(false);
  };

  const handlePowerButton = (): void => {
    setHealthButton(false);
    setPower(true);
    setRotation(false);
    setCollectUpTime(false);
  };

  const handleRotationButton = (): void => {
    setHealthButton(false);
    setPower(false);
    setRotation(true);
    setCollectUpTime(false);
  };

  const handleTotalCollectsButton = (): void => {
    setHealthButton(false);
    setPower(false);
    setRotation(false);
    setCollectUpTime(true);
  };

  const optionHealth = {
    chart: {
      type: 'column',
      backgroundColor: '#f8f8f8',
      borderRadius: 12,
    },
    title: {
      text: 'Saúde dos ativos das unidades',
    },
    subtitle: {
      text: '',
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Saúde em %',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },

    series: [
      {
        name: 'Ativos',
        colorByPoint: true,
        data: assets.map((asset) => {
          return {
            name: asset.name,
            y: asset.healthscore,
            drilldown: asset.name,
          };
        }),
      },
    ],
  };

  const optionPower = {
    chart: {
      type: 'column',
      backgroundColor: '#f8f8f8',
      borderRadius: 12,
    },
    title: {
      text: 'Potência dos ativos das unidades',
    },
    subtitle: {
      text: '',
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Potência em kWh',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y}',
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}kWh</b><br/>',
    },

    series: [
      {
        name: 'Ativos',
        colorByPoint: true,
        data: assets.map((asset) => {
          return {
            name: asset.name,
            y: asset.specifications.power,
            drilldown: asset.name,
          };
        }),
      },
    ],
  };

  const optionRotation = {
    chart: {
      type: 'column',
      backgroundColor: '#f8f8f8',
      borderRadius: 12,
    },
    title: {
      text: 'Rotação dos ativos das unidades',
    },
    subtitle: {
      text: '',
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Rotação em RPM',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y}',
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}RPM</b><br/>',
    },

    series: [
      {
        name: 'Ativos',
        colorByPoint: true,
        data: assets.map((asset) => {
          return {
            name: asset.name,
            y: asset.specifications.rpm,
            drilldown: asset.name,
          };
        }),
      },
    ],
  };

  const optionTotalCollect = {
    chart: {
      type: 'column',
      backgroundColor: '#f8f8f8',
      borderRadius: 12,
    },
    title: {
      text: 'Total de coletas dos ativos das unidades',
    },
    subtitle: {
      text: '',
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Total de coletas',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y}',
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>',
    },

    series: [
      {
        name: 'Ativos',
        colorByPoint: true,
        data: assets.map((asset) => {
          return {
            name: asset.name,
            y: asset.metrics.totalCollectsUptime,
            drilldown: asset.name,
          };
        }),
      },
    ],
  };

  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <ButtonContainer>
            <Button onClick={handleHealthButton}>Saúde</Button>
            <Button onClick={handlePowerButton}>Potência</Button>
            <Button onClick={handleRotationButton}>Rotação</Button>
            <Button onClick={handleTotalCollectsButton}>Coletas</Button>
          </ButtonContainer>
          <Content>
            {healthButton && (
              <>
                <TextContent>
                  <p>
                    No gráfico a seguir, podemos visualizar a relação de saúde
                    pelo ativos, apresentando saúde dos nossos motores e
                    ventiladores.
                  </p>
                  <p>
                    Nele podemos verificar que a saúde de todos os motores são
                    superiores a 70%, e dos ventiladores 50%.
                  </p>
                </TextContent>
                <ContentGraph>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={optionHealth}
                  />
                </ContentGraph>
              </>
            )}

            {power && (
              <>
                <TextContent>
                  <p>
                    No gráfico a seguir, podemos visualizar a relação da
                    potência pelo ativos.
                  </p>
                  <p>
                    Nele podemos verificar que a potência em sua maioria é de
                    1.5 kWh, mas faltam-lhe mais dados para melhor análise.
                  </p>
                </TextContent>
                <ContentGraph>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={optionPower}
                  />
                </ContentGraph>
              </>
            )}

            {rotation && (
              <>
                <TextContent>
                  <p>
                    No gráfico a seguir, podemos visualizar a relação da rotação
                    dos ativos.
                  </p>
                  <p>
                    Nele podemos verificar que a rotação dos motores, mesmo
                    tendo poucos dados, é alta devido sua exigência e a dos
                    ventiladores mais baixas e constantes.
                  </p>
                </TextContent>
                <ContentGraph>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={optionRotation}
                  />
                </ContentGraph>
              </>
            )}

            {collectUpTime && (
              <>
                <TextContent>
                  <p>
                    No gráfico a seguir, podemos visualizar a relação do total
                    de coleta dos ativos.
                  </p>
                  <p>
                    Nele podemos verificar que o número é bem elevado para todos
                    os ativos com exceção de poucos, nos quais podem ter sido
                    ativos mais novos ou com seu status: Em parada.
                  </p>
                </TextContent>
                <ContentGraph>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={optionTotalCollect}
                  />
                </ContentGraph>
              </>
            )}
          </Content>
        </ContainerContent>
      </Container>
    </>
  );
};

export default MoreInfo;
