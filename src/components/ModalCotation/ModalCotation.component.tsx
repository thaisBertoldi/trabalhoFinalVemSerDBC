import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { connect } from 'react-redux';
import api from '../../service/api';
import { RootState } from '../../store';
import { BtnClose, ContainerModal, Modal } from '../ModalBuyer/ModalBuyer.style';

const ModalCotation = ({user, onClick, id}: any) => {

  const [value, setValues] = useState<any>([]);
  console.log(user);
  

  const getCotation = async (id: number) => {
    try {
      const {data} = await api.get(`main-page/quotation/${id}`);
      setValues(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const reproveAllCotations = async () => {
    try {
      const {data} = await api.put(`/manager/reproveAllQuotations/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      getCotation(id);
    }
  }
  
  const handleAproveCotation = async (idQuotation: number) => {
    try {
      const {data} = await api.post(`/manager/aproveQuotation/${idQuotation}`);
    } catch (error) {
      console.log(error);
    } finally {
      getCotation(id);
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
        {user.profile === "MANAGER" && (<button onClick={ () => reproveAllCotations()} > Reprovar todas as cotações </button>)}
        {
          value.map((item: any) => (
            <div key={item.quotationId}>
              <p> R$: {item.quotationPrice}</p>
              <p> Status da cotação: {item.quotationStatus}</p>
              <button onClick={ () => handleAproveCotation(item.quotationId) }> Aprovar </button>
            </div>
          ))
        }
      </Modal>
    </ContainerModal>
  );
}

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(ModalCotation);