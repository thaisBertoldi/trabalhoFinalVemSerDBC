const Pagination = ({ page, onPageChange, allPages }: any) => {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => onPageChange(page - 1)} disabled={page <= 0}>
              Anterior
            </button>
          </li>
          <li>
            <span>{parseInt(page + 1)}</span>
          </li>
          <li>
            <button onClick={() => onPageChange(page + 1)} disabled={page >= allPages - 1}>
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
