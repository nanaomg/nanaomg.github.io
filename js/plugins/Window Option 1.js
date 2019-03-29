Window_TitleCommand.prototype.windowWidth = function() {
    return 200;
};

Window_TitleCommand.prototype.windowHeight = function() {
    return 75;
};

Window_TitleCommand.prototype.updatePlacement = function() {
    this.x = (Graphics.boxWidth - this.width) / 2;
    this.y = Graphics.boxHeight - this.height - 40;
};