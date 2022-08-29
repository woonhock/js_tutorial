let log = console.log

let a = 5;
let b = 50;

let a1 = function () {return 5}
let b1 = function () {return 50}

log(a1());
log(b1());

let a2 = function(num){ return 5*num}
let b2 = function(){ return 50}


log(a2(b2()));
