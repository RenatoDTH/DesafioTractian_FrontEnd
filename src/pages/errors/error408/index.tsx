import React from 'react';
import { useHistory } from 'react-router-dom';
import { ErrorAnimation, ButtonContainer } from '../../../components';

import { Button } from './styles';

const Error408: React.FC = () => {
  const history = useHistory();

  const goBack = (): void => {
    history.push('/');
  };

  return (
    <>
      <ErrorAnimation />
      <ButtonContainer>
        <Button type="button" onClick={goBack}>
          Tente Novamente
        </Button>
      </ButtonContainer>
    </>
  );
};

export default Error408;
