import { useFormik } from 'formik';
import * as Yup from "yup";

import { AiFillCloseCircle } from "react-icons/ai";
import { ContainerModal, Modal, BtnClose } from './ModalBuyer.style';
import { InputForm, Btn } from '../../global.style';
import { Theme } from "../../theme";
import { maskMoney } from '../../utils/utils';

const ModalBuyer = ({onClick}: any) => {

  const formik = useFormik({
    initialValues: {
      value: "",
      
    },
    validationSchema: Yup.object({
      value: Yup.string()
    }),
    onSubmit: (values) => {
      
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
          <Btn width='100%' color={Theme.color.primary}> Adicionar cotação </Btn>
        </form>
      </Modal>
    </ContainerModal>
  );
}

export default ModalBuyer;