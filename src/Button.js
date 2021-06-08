const IncrementButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default IncrementButton;
