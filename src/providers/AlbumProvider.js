import React from 'react';
import axios from 'axios';

function albumReducer(prevState, action) {
  switch (action.type) {
    case 'UPDATE_ALBUMS':
      return action.payload;
    default:
      return prevState;
  }
}

export const AlbumContext = React.createContext({
  addAlbum: () => {},
  removeAlbum: () => {},
  albums: [],
  filteredAlbums: [],
  loading: true,
  hasFilter: false,
  setFilteredAlbum: () => {},
});

export const AlbumProvider = ({ children }) => {
  const [allAlbums, setAllAlbums] = React.useState([]);
  const [filteredAlbums, setFilteredAlbum] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [hasFilter, setHasFilter] = React.useState(false);
  const [state, dispatch] = React.useReducer(albumReducer, []);

  const url = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url);
      if (res) {
        setAllAlbums(res.data.feed.entry);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    dispatch({ type: 'UPDATE_ALBUMS', payload: allAlbums });
  }, [allAlbums]);

  const albumContext = React.useMemo(
    () => ({
      addAlbum: (payload) => {
        setAllAlbums([...allAlbums, payload]);
      },
      removeAlbum: (payload) => {
        const list = allAlbums.filter(
          (album) =>
            album['id']['attributes']['im:id'] !==
            payload['id']['attributes']['im:id']
        );
        setAllAlbums([...list]);
      },
      albums: state,
      filteredAlbums: filteredAlbums,
      setFilteredAlbum: setFilteredAlbum,
      loading: loading,
      hasFilter: hasFilter,
      setHasFilter: setHasFilter,
    }),
    [
      state,
      allAlbums,
      filteredAlbums,
      setFilteredAlbum,
      loading,
      hasFilter,
      setHasFilter,
    ]
  );

  return (
    <AlbumContext.Provider value={albumContext}>
      {children}
    </AlbumContext.Provider>
  );
};
