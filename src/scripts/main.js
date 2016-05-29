// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

var c = document.getElementById("CanvasGame");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 10);
ctx.lineTo(80, 10);
ctx.quadraticCurveTo(90, 10, 90, 20);
ctx.lineTo(90, 80);
ctx.quadraticCurveTo(90, 90, 80, 90);
ctx.lineTo(20, 90);
ctx.quadraticCurveTo(10, 90, 10, 80);
ctx.lineTo(10, 20);
ctx.quadraticCurveTo(10, 10, 20, 10);
ctx.stroke();
ctx.fillStyle="#ff0000"
ctx.fill()

