function Command($element, direction) {
    this.$element = $element;
    this.direction = direction;
    this.oppositeDirection = this.oppositeDirections[direction];
};

Command.prototype.oppositeDirections = {
    'up': 'down',
    'down': 'up',
    'left': 'right',
    'right': 'left'
};

Command.prototype.moves = {
    'up': {'top': '-=30px'},
    'down': {'top': '+=30px'},
    'left': {'left': '-=30px'},
    'right': {'left': '+=30px'}
};

Command.prototype.run = function() {
    this.$element.animate(this.moves[this.direction]);
};

Command.prototype.undo = function() {
    this.$element.animate(this.moves[this.oppositeDirection]);
};
