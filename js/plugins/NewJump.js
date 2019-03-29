Game_CharacterBase.prototype.jumpHeight = function() {
    return (this._jumpPeak * this._jumpPeak -
            Math.pow(Math.abs(this._jumpCount - this._jumpPeak), 2)) / 0.8;
};

