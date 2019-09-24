class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null],[null, null, null],[null, null, null]];
        this._current = 0;
        this.symbol = ['x', 'o'];
    }

    getCurrentPlayerSymbol() {
        return this.symbol[this._current % 2];
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.symbol[this._current%2];
            this._current++;
        }
    }

    isFinished() {
        if (this.noMoreTurns() || this.getWinner()) return true;
        return false;
    }

    getWinner() {
        if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2]) return this.matrix[0][0];
        if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[0][2] === this.matrix[2][0]) return this.matrix[0][2];
        for (let i = 0; i < 3; i++) {   
            if (this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][0] === this.matrix[i][2]) return this.matrix[i][0];
            if (this.matrix[0][i] === this.matrix[1][i] && this.matrix[0][i] === this.matrix[2][i]) return this.matrix[0][i];
        }
        return null;
    }

    noMoreTurns() {
        if (this.matrix.every(el => el.indexOf(null) == -1)) return true;
        return false;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() == null) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
