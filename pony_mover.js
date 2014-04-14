

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
