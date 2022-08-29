const fs = require('fs');

function getTotalFileSize(file1, file2, file3, callback) {
    let total = 0;
    fs.stat(file1, (error, info) => {
        if (error) {
            callback(error);
        } else {
            total += info.size;
            fs.stat(file2, (error, info) => {
                if (error) {
                    callback(error);
                } else {
                    total += info.size;
                    fs.stat(file3, (error, info) => {
                        if (error) {
                            callback(error);
                        } else {
                            total += info.size;
                            callback(null, total);
                        }
                    });
                }
            });
        }
    });
}

function logSize(error, total) {
    console.log('callback fired');
    if (error) {
        console.log(error);
    } else {
        console.log(`${(total/1000000).toFixed(2)} MB`);
    }
}

getTotalFileSize('001.jpg', '002.jpg', '003.jpg', logSize);