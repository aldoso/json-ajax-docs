/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//injecting sass directly into js not html with:
// require('../styles/style.sass')

// const component = require('./component')
// document.write( `Well hello, ${component}` )

// console.log('this is the app.js')

//download data in the console as soon as page loads
/*
let myreq = new XMLHttpRequest()
myreq.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
myreq.onload = function() {
  let mydata = JSON.parse(myreq.responseText)
  // console.log(myreq.responseText)
  console.log(mydata[0])
}
myreq.send()
*/

var pageCounter = 1;
var animalInfo = document.getElementById('animal-info');
var btn = document.getElementById('btn');

btn.addEventListener("click", function () {
  var myreq = new XMLHttpRequest();
  myreq.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  myreq.onload = function () {
    // console.log(myreq.responseText)
    var mydata = JSON.parse(myreq.responseText);
    console.log(mydata);
    renderHTML(mydata);
  };
  myreq.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add('hide-me');
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (var i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + "is a " + data[i].species + 'that likes to eat ';
    for (var ii = 0; ii < data[i].foods.likes.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += ' and dislikes ';

    for (var _ii = 0; _ii < data[i].foods.dislikes.length; _ii++) {
      if (_ii == 0) {
        htmlString += data[i].foods.dislikes[_ii];
      } else {
        htmlString += " and " + data[i].foods.dislikes[_ii];
      }
    }

    htmlString += '.</p>';
  }

  animalInfo.insertAdjacentHTML('beforeend', htmlString);
}

/***/ })
/******/ ]);