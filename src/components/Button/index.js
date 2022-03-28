const Button = ({ hasCurrent, currentValue, onClick, buttonText }) => {
  return (
    <button
      aria-current={hasCurrent ? currentValue : undefined}
      onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
