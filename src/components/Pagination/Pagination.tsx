const Pagination = ({ page, onPageChange, allPages }: any) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => onPageChange(page - 1)}>
              Anterior
            </button>
          </li>
          <li>
            <span>{parseInt(page)}</span>
          </li>
          <li>
            <button onClick={() => onPageChange(page + 1)}>
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
