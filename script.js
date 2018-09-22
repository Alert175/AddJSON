'use strict';

var mydata = JSON.parse(data);
var _input = document.getElementById('input');
var _click = document.getElementById('click');
var _arrea = document.getElementById('text');
var trueInput = _input.value;//Переменная нужна просто для того, чтобы данный считывались данные с #input, тк без нее выводится "undefined"
var range = document.createRange();

console.log(mydata);

_click.addEventListener('click', function () {
  for (var i = 0; i < mydata.length; i++) {
    if (_input.value == mydata[i].name || _input.value == mydata[i].id) {
      _arrea.innerHTML = mydata[i].name;
    };
  }
  var buff = document.querySelector('#text');
  range.selectNode(buff);
  window.getSelection().addRange(range);
    try {
      document.execCommand('copy');
      console.log('Complete copy!');
   }
   catch {
     console.log('Not range');
   }
    window.getSelection().removeAllRanges();
});
