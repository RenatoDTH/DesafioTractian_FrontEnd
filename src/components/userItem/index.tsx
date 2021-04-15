import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { IUsers } from '../../models';
import 'react-responsive-modal/styles.css';

import { Container, ModalContent } from './styles';

export interface IUserItemProps {
  user: IUsers;
}

const UserItem: React.FC<IUserItemProps> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <>
      <Container>
        <strong>{user.name}</strong>
        <span>Unidade: {user.unitId === 1 ? 'Jaguar' : 'Tobias'}</span>
        <button type="button" onClick={handleOpenModal}>
          Mais informações
        </button>
        <Modal
          open={open}
          onClose={handleCloseModal}
          center
          styles={{ modal: { borderRadius: '12px' } }}
        >
          <ModalContent>
            <h2>{user.name}</h2>
            <p>E-mail: {user.email}</p>
            <p>Unidade: {user.unitId === 1 ? 'Jaguar' : 'Tobias'}</p>
            <p>Empresa: {user.companyId === 1 && 'Teste'}</p>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default UserItem;
