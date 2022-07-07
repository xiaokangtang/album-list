// import './Pagination.css';
import { useContext } from 'react';
import { PaginateContext } from '../../providers/PaginateProvider';
import Button from '../../ui-components/Button';

const Pagination = ({ dataLength }) => {
  const { itemsPerPage, currentPageIndex, setCurrentPageIndex } =
    useContext(PaginateContext);

  const handlePageClick = (number) => {
    setCurrentPageIndex(number - 1);
  };

  //calculate total page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dataLength / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex mt-5 p-5 gap-x-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            aria-current={currentPageIndex + 1 === number ? 'page' : null}
            className={
              currentPageIndex + 1 === number
                ? 'text-blue-600' //different styling for current page
                : ''
            }>
            <Button onClick={() => handlePageClick(number)}></Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
