import { ContainerModal, Modal } from './ModalBuyer.style';

const ModalBuyer = ({onClick}: any) => {
  return (
    <ContainerModal>
      <Modal>
        <button onClick={onClick}> X </button>
        <h1>teste Modal</h1>
      </Modal>
    </ContainerModal>
  );
}

export default ModalBuyer;