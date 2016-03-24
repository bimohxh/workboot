import {Game} from './module/Game'

var game = new Game()


/*var promises = [2,3,5,7,11].map(function(id){
  return new Promise(function(resolve, reject){
    var timeout = 1000
    if (id === 2) {timeout = 3000}
    setTimeout(function(){
      console.log(id)
      resolve()
    },timeout)
  })
})*/


var getP = function(i){
  return  new Promise(function(resolve, reject){
    var timeout = 1000
    if (i === 2) {timeout = 3000}
    setTimeout(function(){
      console.log(i)
      resolve()
    },timeout)
  })
}


Promise.resolve().then(function(){
  return getP(2)
}).then(function(){
  return getP(3)
}).then(function(){
  return getP(4)
}).then(function(){
  return getP(5)
}).then(function(){
  return getP(6)
})

