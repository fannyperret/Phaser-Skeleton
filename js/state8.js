demo.state8 = function(){};
demo.state8.prototype = {
  preload: function() {},
  create: function() {
    game.stage.backgroundColor = "#4488AA";
    console.log('state8');

    addChangeStateEventListeners();
  },
  update: function() {}

};