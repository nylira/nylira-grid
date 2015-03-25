(function() {
'use strict'

var TwoDimensionalArray = require('nylira-2d-array')

function Grid(height, width){
  this.height = height !== undefined ? height : 10
  this.width = width !== undefined? width: this.height
  this.cells = new TwoDimensionalArray(this.height, this.width)
}

module.exports = Grid
}())
