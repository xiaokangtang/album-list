import { useContext } from 'react';
import { AlbumContext } from '../../providers/AlbumProvider';
import { PaginateContext } from '../../providers/PaginateProvider';
import List from '../List';
import SearchBar from '../SearchBar';
import Pagination from '../Pagination';

const AlbumPage = () => {
  const { albums, loading, filteredAlbums, setFilteredAlbum } =
    useContext(AlbumContext);
  const { itemsPerPage, currentPageIndex, setCurrentPageIndex } =
    useContext(PaginateContext);

  const displayedAlbums = filteredAlbums.length > 0 ? filteredAlbums : albums;

  // Get current page items
  const indexOfLastItem =
    displayedAlbums.length > itemsPerPage
      ? (currentPageIndex + 1) * itemsPerPage
      : displayedAlbums.length;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageAlbums = displayedAlbums.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const filterAlbums = (inputValue) => {
    if (inputValue) {
      const filteredResults = albums.filter((album) =>
        album['im:name']['label']
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      );
      setFilteredAlbum([...filteredResults]);
    } else {
      setFilteredAlbum([]);
    }
    setCurrentPageIndex(0);
  };
  return (
    <div className="p-4 md:p-8">
      <h1>Top 100 Albums</h1>
      <SearchBar filterAlbums={filterAlbums} />
      <List data={currentPageAlbums} isLoading={loading} />
      <Pagination dataLength={displayedAlbums.length} />
    </div>
  );
};

export default AlbumPage;
