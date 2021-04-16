import React, { useEffect, useState } from 'react';
import {
  ContainerContent,
  Header,
  Button,
  UserItem,
  ButtonContainer,
  ContentWrap,
} from '../../components';
import { IUnits, IUsers } from '../../models';
import api from '../../services/api';

import { Container } from './styles';

const Users: React.FC = () => {
  const [units, setUnits] = useState<IUnits[]>([]);
  const [users, setUsers] = useState<IUsers[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get('units').then((response) => {
      setIsLoading(true);
      setUnits(response.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    api.get('users').then((response) => {
      setIsLoading(true);
      setUsers(response.data);
      setIsLoading(false);
    });
  }, []);

  const handleAllUnities = (): void => {
    api.get('users').then((response) => {
      setUsers(response.data);
    });
  };

  const handleUnity1 = (): void => {
    api
      .get('users', {
        params: {
          unitId: 1,
        },
      })
      .then((response) => {
        setUsers(response.data);
      });
  };

  const handleUnity2 = (): void => {
    api
      .get('users', {
        params: {
          unitId: 2,
        },
      })
      .then((response) => {
        setUsers(response.data);
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
          <ContentWrap>
            {users.map((user: IUsers) => (
              <UserItem key={user.id} user={user} />
            ))}
          </ContentWrap>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Users;