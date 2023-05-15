const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;

  const noMoveLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderstatusMessage =() => {
    if (winner) {
      return <div>
            Winner is {' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>{winner}</span>
        </div>
    }
    if (!winner && noMoveLeft) {
      return <div><span className="text-orange">O</span> and <span className="text-green">X</span> Tied.</div>
    }
    if (!winner && !noMoveLeft) {
      return  <div>Next Player is{' '}
      <span className={isXNext ? 'text-green' : 'text-orange'}>{nextPlayer}</span></div> 
    }
    return null;
  }

  return ( 
  <h2 className="status-message">
    {renderstatusMessage()}
  </h2>
  );
};

export default StatusMessage;
