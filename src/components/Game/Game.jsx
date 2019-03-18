import React from 'react';
import Title from '../Title/Title.jsx';
import Board from '../Board/Board.jsx';
import './Game.scss';

class Game extends React.Component {
  render() {
    return (
      <div id="game">
        <Title />
        <div className="status">{status}</div>
        <Board />
      </div>
    );
  }
}

export default Game;
