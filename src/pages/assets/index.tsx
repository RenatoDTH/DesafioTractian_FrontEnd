import React, { useEffect, useState } from 'react';
import {
  Button,
  ContainerContent,
  Header,
  AssetItem,
  ButtonContainer,
  ContentWrap,
  LoadAnimation,
} from '../../components';
import { IUnits, IAssets } from '../../models';
import api from '../../services/api';

import { Container } from './styles';

const Assets: React.FC = () => {
  const [units, setUnits] = useState<IUnits[]>([]);
  const [assets, setAssets] = useState<IAssets[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      api.get('units').then((response) => {
        setUnits(response.data);
      });
      api.get('assets').then((response) => {
        setAssets(response.data);
      });
      setIsLoading(false);
    }, 1 * 500);
  }, []);

  const handleAllUnities = (): void => {
    api.get('assets').then((response) => {
      setAssets(response.data);
    });
  };

  const handleUnity1 = (): void => {
    api
      .get('assets', {
        params: {
          unitId: 1,
        },
      })
      .then((response) => {
        setAssets(response.data);
      });
  };

  const handleUnity2 = (): void => {
    api
      .get('assets', {
        params: {
          unitId: 2,
        },
      })
      .then((response) => {
        setAssets(response.data);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <ContainerContent>
          <ButtonContainer>
            <Button onClick={handleAllUnities}>
              {isLoading ? 'Carregando' : 'Ativos'}
            </Button>
            <Button onClick={handleUnity1}>
              {isLoading ? 'Carregando' : units[0]?.name}
            </Button>
            <Button onClick={handleUnity2}>
              {isLoading ? 'Carregando' : units[1]?.name}
            </Button>
          </ButtonContainer>
          {isLoading ? (
            <LoadAnimation />
          ) : (
            <>
              <ContentWrap>
                {assets.map((asset: IAssets) => (
                  <AssetItem key={asset.id} asset={asset} />
                ))}
              </ContentWrap>
            </>
          )}
        </ContainerContent>
      </Container>
    </>
  );
};

export default Assets;
