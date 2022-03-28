const ListItem = ({ name, image, price, artist, rights }) => {
  return (
    <div className="w-full lg:max-w-full lg:flex">
      <div className="h-48 lg:h-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img className="h-auto max-w-full" src={image} alt={name}></img>
      </div>
      <div className="lg:w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <h2>{name}</h2>
        <div>
          <p>Artist(s): {artist} </p>
          <p>Price: {price}</p>
          {/* <small>{rights}</small> */}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
