import * as Yup from "yup";
import { useFormik } from 'formik';
import Notiflix, { Loading } from 'notiflix';
import { AiFillCloseCircle } from "react-icons/ai";
import api from '../../service/api';
import { Modal, ButtonCard } from './ModalBuyer.style';
import { ContainerModal, BtnClose } from '../globalStyleComponents.style';
import { InputForm } from '../../global.style';
import { Theme } from "../../theme";
import { maskMoney, removeMaskMoney } from '../../utils/utils';
import { ENDPOINT_QUOTATION } from '../../constants';
import { ModalComponentDTO } from '../../models/ModalsDTO';

const ModalBuyer = ({onClick, id}: ModalComponentDTO) => {

  const handleAddQuotation = async (values: string) => {
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
        `Sinto muito, mas nao foi possivel adicionar a cotação.`
      );
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