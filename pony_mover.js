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

Command.prototype.down = function() {
    this.$element.animate({'top': '+=30px'});
};

Command.prototype.up = function() {
    this.$element.animate({'top': '-=30px'});
};

Command.prototype.left = function() {
    this.$element.animate({'left': '-=30px'});
};

Command.prototype.right = function() {
    this.$element.animate({'left': '+=30px'});
};

Command.prototype.run = function() {
    this[this.direction]();
};

Command.prototype.undo = function() {
    this[this.oppositeDirection]();
};

function PonyMover($pony, $log) {
  this.$pony = $pony;
  this.$log = $log;

  // Stack of all the moves. Eg.: ['left', 'up', 'down']
  this.moves = []
};

PonyMover.prototype.move = function(keyCode) {
  var direction = keyCodeToName[keyCode] // Convert key code to direction name

  if (direction) {
    var move = new Command(this.$pony, direction);
    move.run();
    this.moves.push(move);
    this.$log.append('<li>' + direction + '</li>')
  }
};

PonyMover.prototype.undo = function() {
  // Get the last move
  var move = this.moves.pop();

  if (move) {
    move.undo();
    this.$log.find('li:last').remove()
  }
};
