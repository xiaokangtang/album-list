const ListItem = ({ name, image, price, artist, rights }) => {
  return (
    <div>
      <div>
        <div>
          <img src={image} alt={name}></img>
        </div>
        <div>
          <h2>{name}</h2>
          <div>
            <p>Artist(s): {artist} </p>
            <p>Price: {price}</p>
          </div>
        </div>
      </div>
      <div>
        <small>{rights}</small>
      </div>
    </div>
  );
};

export default ListItem;
