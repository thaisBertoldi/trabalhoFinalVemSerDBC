import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Pagination = ({ page, onPageChange, allPages }: any) => {
  return (
    <div>
      <button onClick={() => onPageChange(page - 1)} disabled={page <= 0}>
        <MdOutlineArrowBackIosNew />
      </button>

      <span>{parseInt(page + 1)}</span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= allPages - 1}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
};

export default Pagination;
