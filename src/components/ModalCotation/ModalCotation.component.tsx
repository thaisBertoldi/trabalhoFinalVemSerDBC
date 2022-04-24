import { AiFillCloseCircle } from 'react-icons/ai';
import { BtnClose, ContainerModal, Modal } from '../ModalBuyer/ModalBuyer.style';

const ModalCotation = ({onClick}: any) => {
  return (
    <ContainerModal>
      <Modal>
        <BtnClose onClick={onClick}> <AiFillCloseCircle /> </BtnClose>
        <h1>ModalCotation</h1>
      </Modal>
    </ContainerModal>
  );
}

export default ModalCotation;