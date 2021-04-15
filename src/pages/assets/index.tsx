import React, { useEffect, useState } from 'react';
import { Button, ContainerContent, Header, AssetItem } from '../../components';
import { IUnits, IAssets } from '../../models';
import api from '../../services/api';

import { Container, ButtonContainer, Content } from './styles';

const Assets: React.FC = () => {
  const [units, setUnits] = useState<IUnits[]>([]);
  const [assets, setAssets] = useState<IAssets[]>([]);

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
            <Button onClick={handleAllUnities}>Ativos</Button>
            <Button onClick={handleUnity1}>{units[0]?.name}</Button>
            <Button onClick={handleUnity2}>{units[1]?.name}</Button>
          </ButtonContainer>
          <Content>
            {assets.map((asset: IAssets) => (
              <AssetItem key={asset.id} asset={asset} />
            ))}
          </Content>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Assets;
