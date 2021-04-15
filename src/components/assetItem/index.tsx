import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { IAssets } from '../../models';
import 'react-responsive-modal/styles.css';

import { Container, ModalContent } from './styles';

export interface IAssetItemProps {
  asset: IAssets;
}

const UnityItem: React.FC<IAssetItemProps> = ({ asset }) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const totalUptime = Math.round(asset.metrics.totalUptime);
  const lastUptimeAt = new Date(asset.metrics.lastUptimeAt)
    .toISOString()
    .replace(/T.*/, '')
    .split('-')
    .reverse()
    .join('/');
  return (
    <>
      <Container>
        <img src={asset.image} alt={asset.name} />
        <strong>{asset.name}</strong>
        <span>Modelo: {asset.model}</span>
        <span>Sensor: {asset.sensors}</span>
        <button type="button" onClick={handleOpenModal}>
          Mais informações
        </button>
        <Modal open={open} onClose={handleCloseModal} center>
          <ModalContent>
            <h2>{asset.name}</h2>
            <p>Modelo: {asset.model}</p>
            {asset.status === 'inAlert' && (
              <p>
                Status: <span style={{ color: '#de9d26' }}>Em alerta</span>
              </p>
            )}
            {asset.status === 'inOperation' && (
              <p>
                Status: <span style={{ color: '#26de45' }}>Em Operação</span>
              </p>
            )}
            {asset.status === 'inDowntime' && (
              <p>
                Status: <span style={{ color: '#b01b19' }}>Em Parada</span>
              </p>
            )}
            {asset.status === undefined && <p>Status: -</p>}

            <p>Saúde: {asset.healthscore ? `${asset.healthscore}%` : '-'}</p>
            <p>Total de coletas: {asset.metrics.totalCollectsUptime}</p>
            <p>Total de Horas de coletas: {totalUptime} horas</p>
            <p>Ultima Coleta: {lastUptimeAt || '-'}</p>
            <p>Máxima temperatura: {asset.specifications.maxTemp}ºC</p>
            <p>
              Potência:{' '}
              {asset.specifications.power
                ? `${asset.specifications.power} kWw`
                : '-'}
            </p>
            <p>
              RPM:{' '}
              {asset.specifications.rpm
                ? `${asset.specifications.rpm} RPM`
                : '-'}
            </p>
            <p>Unidade: {asset.unitId === 1 ? 'Jaguar' : 'Tobias'}</p>
            <p>Empresa: {asset.companyId === 1 && 'Teste'}</p>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export default UnityItem;
