const Button = ({ onClick, children }) => {
  return (
    <button
      className="bg-transparent font-semibold py-2 px-4 border hover:border-black rounded"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
