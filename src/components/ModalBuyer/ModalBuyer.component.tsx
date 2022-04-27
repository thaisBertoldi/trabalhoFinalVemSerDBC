import { useFormik } from 'formik';
import * as Yup from "yup";

import { AiFillCloseCircle } from "react-icons/ai";
import { ContainerModal, Modal, BtnClose, ButtonCard } from './ModalBuyer.style';
import { InputForm } from '../../global.style';
import { Theme } from "../../theme";
import { maskMoney, removeMaskMoney } from '../../utils/utils';
import api from '../../service/api';
import { ENDPOINT_QUOTATION } from '../../constants';
import Notiflix, { Loading } from 'notiflix';

const ModalBuyer = ({onClick, id}: any) => {

  const handleAddQuotation = async (values: any) => {
    const finalValue = removeMaskMoney(values);
    const price = parseFloat(finalValue);
  
    Loading.circle();
    try {
      const {data} = await api.post(`${ENDPOINT_QUOTATION.CREATE_QUOTATION}/${id}?preco=${price}`);
      Notiflix.Notify.success(
        `Cotação criada com sucesso.`
      );
      onClick()
    } catch (error) {
      Notiflix.Notify.failure(
        `Sinto muito, mas nao foi possivel adicionar a cotação`
      );
      console.log(error);
    } finally {
      Loading.remove();
    }
  }

  const formik = useFormik({
    initialValues: {
      value: "",
    },
    validationSchema: Yup.object({
      value: Yup.string()
    }),
    onSubmit: (values) => {
      handleAddQuotation(values.value);
    },
  });

  return (
    <ContainerModal>
      <Modal>
        <BtnClose onClick={onClick}> <AiFillCloseCircle /> </BtnClose>
        <form onSubmit={formik.handleSubmit}>
          <InputForm
            width={'100%'}
            height={'40px'}
            id="value"
            name="value"
            type="text"
            placeholder='Digite o valor'
            onChange={ (e) => maskMoney(e, formik.setFieldValue, "value") }
            value={formik.values.value}
          />
          <ButtonCard color={Theme.color.primary}> Adicionar cotação </ButtonCard>
        </form>
      </Modal>
    </ContainerModal>
  );
}

export default ModalBuyer;