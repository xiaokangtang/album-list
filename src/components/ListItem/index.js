const ListItem = ({ name, image, price, artist, rights }) => {
  return (
    <div className="w-full md:max-w-full md:flex">
      <div className="h-48 md:h-auto flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden">
        <img className="h-auto max-w-full" src={image} alt={name}></img>
      </div>
      <div className="md:w-full border-r border-b border-l border-gray-400 md:border-l-0 md:border-t md:border-gray-400 bg-white rounded-b md:rounded-b-none md:rounded-r p-4 flex flex-col justify-between leading-normal">
        <h2>{name}</h2>
        <div>
          {/* <p>Artist(s): {artist} </p> */}
          <p>Price: {price}</p>
          {/* <small>{rights}</small> */}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
