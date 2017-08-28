import _ from 'lodash'

// var _ = require('lodash');

import './style.css';
import printMe from './print.js'

function componet() {
    var ele = document.createElement('div');
    ele.textContent = _.join(['hello','webpack','webpack-dev-server','test']," ");
    ele.classList.add('hello');
    ele.onclick = printMe;
    return ele;
}

var ele = componet();

document.body.appendChild(ele);

 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');


    document.body.removeChild(ele);

    ele = componet();

    document.body.appendChld(ele);

     printMe();
   })
 }