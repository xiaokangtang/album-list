import React from 'react';

const itemsPerPage = 10;

export const PaginateContext = React.createContext({
  itemsPerPage,
  currentPageIndex: 0,
  setCurrentPageIndex: () => {},
});

export const PaginateProvider = ({ children }) => {
  const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
  console.log('provider', currentPageIndex);
  return (
    <PaginateContext.Provider
      value={{
        itemsPerPage,
        currentPageIndex,
        setCurrentPageIndex,
      }}>
      {children}
    </PaginateContext.Provider>
  );
};
