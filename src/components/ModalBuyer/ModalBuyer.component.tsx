import { useFormik } from 'formik';
import * as Yup from "yup";

import { AiFillCloseCircle } from "react-icons/ai";
import { ContainerModal, Modal, BtnClose, ButtonCard } from './ModalBuyer.style';
import { InputForm } from '../../global.style';
import { Theme } from "../../theme";
import { maskMoney } from '../../utils/utils';
import api from '../../service/api';
import { ENDPOINT_COTATION } from '../../constants';

const ModalBuyer = ({onClick, id}: any) => {

  const handleAddCotation = async (values: any) => {
    console.log(id);
    const finalValue = values.replace('R$ ', '').replace('.', '').replace(',', '.');
    const price = parseFloat(finalValue);

    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const {data} = await api.post(`${ENDPOINT_COTATION.CREATE_COTATION}/${id}?preco=${price}`);
      console.log(data);
    } catch (error) {
      console.log(error);
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
      handleAddCotation(values.value);
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