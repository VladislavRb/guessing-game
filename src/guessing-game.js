class GuessingGame {
    constructor() {
        this._start;
        this._end;
        this._suggestion;
    }

    setRange(min, max) {
        this._start = min;
        this._end = max;
    }

    guess() {
        this._suggestion = Math.round((this._start + this._end) / 2);
        return this._suggestion;
    }

    lower() {
        this.setRange(this._start, this._suggestion);
    }

    greater() {
        this.setRange(this._suggestion, this._end);
    }
}

module.exports = GuessingGame;
