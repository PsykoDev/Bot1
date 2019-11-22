var path = require("path"),
    fs = require('fs');	
var Router = require('.../node_modules');
const Me = require('./lib/me');
const Inventory = require('./lib/inventory');

module.exports = (d) => {
    d.me = new Me(d);
    d.inventory = new Inventory(d);
    d.game = {
        me: d.me,
        inventory: d.inventory
    };
}

var requireStack = require('require-stack')
try{
  requireStack('./node_modules/lodash/_Stack.js')
}catch(e){
  console.log(e.stack)
}

var m;
try {
    m = require(modulePath);
} catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
    }
    m = backupModule;
}