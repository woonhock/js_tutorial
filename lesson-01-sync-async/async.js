// Synchronous code

let log = console.log;

log('Asynchronous code');

let a = 5;
let b = 50;

setTimeout(function () {
    log('Timeout complete');
}, 1000)

log(a);
log(b);
log('After Timeout')


const getTodo = (callback) => {
    setTimeout(function () {
        callback(null, {
            id: a,
            text: c
        });
    }, 1000, c=3)
};

getTodo(myCallback);

function myCallback(err, result) {
    log('Callback fired')
    if (err) {
        log(err);
    } else {
        log(result);
    }
}

log('After callback code');