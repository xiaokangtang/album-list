// import './Pagination.css';
import { useContext } from 'react';
import { PaginateContext } from '../../providers/PaginateProvider';
import Button from '../../components/Button';

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
      <ul className="pagination-container">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              currentPageIndex === number
                ? 'page-item active-page-item' //different styling for current page
                : 'page-item'
            }>
            <Button
              hasCurrent={true}
              currentValue={currentPageIndex === number ? 'page' : null}
              onClick={() => handlePageClick(number)}
              buttonText={number}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
