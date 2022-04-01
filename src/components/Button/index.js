const Button = ({ hasCurrent, currentValue, onClick, buttonText }) => {
  return (
    <button
      className="bg-transparent font-semibold py-2 px-4 border hover:border-black rounded"
      aria-current={hasCurrent ? currentValue : undefined}
      onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
