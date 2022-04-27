import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { PaginationDTO } from "../../models/PaginationDTO";
import { ButtonCustom, ContainerPagination } from "./Pagination.style";

const Pagination = ({ page, onPageChange, allPages }: PaginationDTO) => {

  return (
    <ContainerPagination>
      <ButtonCustom onClick={() => onPageChange(page - 1)} disabled={page <= 0} colorHover={'#f1ce03'} >
        <MdOutlineArrowBackIosNew /> Anterior
      </ButtonCustom>

      <span>Página {parseInt((page) + 1)}</span>

      <ButtonCustom
        onClick={() => onPageChange(page + 1)}
        disabled={page >= allPages - 1}
        colorHover={'#009100'}
      >
        Próxima <MdArrowForwardIos />
      </ButtonCustom>
    </ContainerPagination>
  );
};

export default Pagination;
