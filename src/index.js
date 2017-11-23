import _ from 'lodash';
// import $ from 'jquery'
// import numRef from './ref.json';
// import $ from 'jQuery'
import $ from 'expose?$!jquery'

import cookie from 'cookie';

import url from 'url';

var cookies = require('cookie-signature')

var escapeHtml = require('escape-html');


var testa = cookies.sign('hello', 'tobiiscool');
console.log(testa)

console.log(cookies.unsign(testa,'tobiiscool'))


const a = document.createElement('div');

a.setAttribute('id','a');

document.body.appendChild(a);


document.write(escapeHtml('<div>a</div>'));

export function numToWord(num) {
  return 'numToWord';
    // return _.reduce(numRef, (accum, ref) => {
    //     return ref.num === num ? ref.word : accum;
    // }, '');
};

console.log(url.parse('http://127.0.0.1:8080?id=1&name=2',true,true));

cookie.serialize('foo', 'bar')


cookie.serialize('test','test');

$('#a').css({
  'width' : '100px',
  'height' : '100px',
  'background' : 'red'
});

export function wordToNum(word) {
  return 'wordToNum';
    // return _.reduce(numRef, (accum, ref) => {
    //     return ref.word === word && word.toLowerCase() ? ref.num : accum;
    // }, -1);
};



var defined = require('defined');
var opts = { x : 1,y : false, w : 4 };
var x = defined(opts.x, opts.y, opts.w, 100);
console.log(x);


var postcss = require('postcss')
var colormin = require('postcss-colormin');

var css = 'rgba(255, 125, 33, 1)';
console.log(postcss(colormin()).process(css).css);