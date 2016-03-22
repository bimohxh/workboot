import test from 'ava'
import {Game} from '../../src/js/module/Game'

test(t=> { 
  var game = new Game();
  t.is(game.study(2,4),8)
})
