import {useState} from 'react';
//stylesheet
import './App.css';

//fonts
import "./fonts/ARCO.ttf";
import "./fonts/ARCOTypography.woff";
import "./fonts/ARCOTypography.woff2";

//components
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScordeBoard';
import NamesInput from './components/NamesInput/NamesInput';

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const App = () => {

  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winningSquares, setWinningSquares] = useState([]);
  const [show, setShow] = useState(false);
  const [score, setScore] = useState({
    X:0,
    O:0,
  });
  const [name, setName] = useState({
    f:'Jugador 1',
    s:'Jugador 2',
  });

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
  }

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if(result !== null){
      setScore({
        ...score,
        [result]: score[result] + 1,
      })
    }

    setWinningSquares(winningPositions);
    setTimeout(reset, 2000);
  }

  const checkForWinner = newSquares => {
    for(let i = 0; i < winningPositions.length; i++) {
      const [a,b,c] = winningPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
        endGame(newSquares[a], winningPositions[i]);
        return
      }
    }

    if(!newSquares.includes(null)) {
      endGame(null, Array.from(Array(10).keys()));
      return
    }
    setTurn(turn === 'X' ? 'O': 'X');
  }

  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  }

  const startGame = () => {
    let p1Name = (document.getElementsByName('p1')[0].value === '')? name.f : document.getElementsByName('p1')[0].value;
    let p2Name = (document.getElementsByName('p2')[0].value === '')? name.s : document.getElementsByName('p2')[0].value;
    setName({
      ...name,
      f:p1Name,
      s:p2Name,
    });
    setShow(true);
  }

  return (
    <div className="container">
      <NamesInput onClick={startGame} hide={show}/>
      <Board
        winningSquares={winningSquares}
        turn={turn}
        squares={squares} 
        onClick={handleClick}
        show={show}
      />
      <ScoreBoard scoreO={score.O} scoreX={score.X} show={show} nameP1={name.f} nameP2={name.s} />
    </div>
  );
}

export default App;
