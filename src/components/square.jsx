const Square = ({ value, onClick, isWinningSquares }) => {

  const colorClassname = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassname = isWinningSquares ? 'winning' : '';

  return (
    <button type="button" 
    className={`square ${colorClassname} ${winningClassname}`} 
    onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Square;
