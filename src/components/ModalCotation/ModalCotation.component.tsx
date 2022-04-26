import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import api from '../../service/api';
import { BtnClose, ContainerModal, Modal } from '../ModalBuyer/ModalBuyer.style';

const ModalCotation = ({onClick, id}: any) => {

  const [value, setValues] = useState<any>([]);

  const getCotation = async (id: number) => {
    try {
      const {data} = await api.get(`main-page/quotation/${id}`);
      setValues(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCotation(id);
  }, [])
  

  return (
    <ContainerModal>
      <Modal>
        <BtnClose onClick={onClick}> <AiFillCloseCircle /> </BtnClose>
        <h1>Cotações </h1>
        <button> Reprovar todas as cotações </button>
        {
          value.map((item: any) => (
            <div key={item.quotationId}>
              <p> R$: {item.quotationPrice}</p>
              <p> Status da cotação: {item.quotationStatus}</p>
              <button> Aprovar </button>
            </div>
          ))
        }
      </Modal>
    </ContainerModal>
  );
}

export default ModalCotation;