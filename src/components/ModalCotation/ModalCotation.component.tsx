import { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { connect } from 'react-redux';
import { ENDPOINT_COTATION, ENDPOINT_FINANCIER, ENDPOINT_MANAGER } from '../../constants';
import { StatusEnum } from '../../enums/StatusEnum';
import api from '../../service/api';
import { RootState } from '../../store';
import { BtnClose, ContainerModal, Modal } from '../ModalBuyer/ModalBuyer.style';
import { TopModal, DivQuotations, DivButtons, BtnModalQuotation } from './ModalCotation.style';

const ModalCotation = ({user, onClick, id}: any) => {

  const [value, setValues] = useState<any>([]);

  const getCotation = async (id: number) => {
    try {
      const {data} = await api.get(`${ENDPOINT_COTATION.MAIN_PAGE_QUOTATION}/${id}`);
      setValues(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const reproveAllCotations = async () => {
    try {
      const {data} = await api.put(`${ENDPOINT_MANAGER.REPROVE_ALL_QUOTATIONS}/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      getCotation(id);
    }
  }
  
  const handleAproveCotation = async (idQuotation: number) => {
    try {
      const {data} = await api.post(`${ENDPOINT_MANAGER.APROVE_QUOTATION}/${idQuotation}`);
    } catch (error) {
      console.log(error);
    } finally {
      getCotation(id);
    }
  }

  const handleAproveByFinancier = async (status: boolean) => {
    try {
      const { data } = await api.put(`${ENDPOINT_FINANCIER.UPDATE_STATUS}/${id}/${status}`);
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
        <TopModal>
          <h1>Cotações </h1>
          {(user.profile === "MANAGER" && value.length > 0 ) && (<BtnModalQuotation color={'#f44336'} onClick={ () => reproveAllCotations()} > Reprovar todas as cotações </BtnModalQuotation>)}
        </TopModal>
        
          {
            value.length > 0 ? (
              value.map((item: any) => (
                <DivQuotations key={item.quotationId}>
                  <p> Status da cotação: {StatusEnum[item.quotationStatus]}</p>
                  <p> R$: {item.quotationPrice}</p>
                  <DivButtons>
                    {
                      (user.profile === "MANAGER" || user.profile === "FINANCIER") && (
                        <BtnModalQuotation color={'#04a96d'} onClick={ () => { user.profile === "MANAGER" ? handleAproveCotation(item.quotationId) : handleAproveByFinancier(true) }  }> Aprovar </BtnModalQuotation>
                      )
                    }
                    { user.profile === "FINANCIER" && (<BtnModalQuotation color={'#f44336'} onClick={ () => handleAproveByFinancier(false) }> Reprovar </BtnModalQuotation>)}
                  </DivButtons>
                </DivQuotations>
              ))
            ) : (
              <p> Não há cotações para exibir </p>
            )
          }
      </Modal>
    </ContainerModal>
  );
}

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer,
});

export default connect(mapStateToProps)(ModalCotation);