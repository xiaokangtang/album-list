// import { useState, useEffect } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
// import Pagination from '../Pagination/Pagination';
import ListItem from '../../components/ListItem';

const List = ({ data, isLoading }) => {
  if (isLoading) {
    return <h2 className="loading">Loading...</h2>;
  }
  return (
    <div>
      {/* <SearchBar data={data} filterData={filterData} /> */}
      {data.length > 0 ? (
        //if current data exists (initial render or filtered result exists)
        <ul>
          {data.map((item) => (
            <li key={item['id']['attributes']['im:id']}>
              <ListItem
                name={item['im:name']['label']}
                image={item['im:image'][2]['label']}
                price={item['im:price']['label']}
                artist={item['im:artist']['label']}
                rights={item['rights']['label']}
              />
            </li>
          ))}
        </ul>
      ) : (
        //no filtered result
        <p>There's no match for your search, please try again.</p>
      )}
    </div>
  );
};

export default List;
