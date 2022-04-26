import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { ButtonCustom, ContainerPagination } from "./Pagination.style";

const Pagination = ({ page, onPageChange, allPages }: any) => {
  return (
    <ContainerPagination>
      <ButtonCustom onClick={() => onPageChange(page - 1)} disabled={page <= 0} colorHover={'#f1ce03'} >
        <MdOutlineArrowBackIosNew />
      </ButtonCustom>

      <span>Página {parseInt(page + 1)}</span>

      <ButtonCustom
        onClick={() => onPageChange(page + 1)}
        disabled={page >= allPages - 1}
        colorHover={'#009100'}
      >
        <MdArrowForwardIos />
      </ButtonCustom>
    </ContainerPagination>
  );
};

export default Pagination;
