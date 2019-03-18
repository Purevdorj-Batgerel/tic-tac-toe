import React from 'react';
import Cell from '../Cell/Cell.jsx';
import './Board.scss';

class Board extends React.Component {
  renderCell(i) {
    return (
      <Cell
        value={this.props.cells[i]}
        onClick={() => this.props.clickHandler(i)}
      />
    );
  }
  render() {
    return (
      <div className="board">
        <div className="row">
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>
        <div className="row">
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>
        <div className="row">
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
      </div>
    );
  }
}

export default Board;
