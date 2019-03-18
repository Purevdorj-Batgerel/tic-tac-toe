import React from 'react';
import Cell from '../Cell/Cell.jsx';
import './Board.scss';

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    );
  }
}

export default Board;
