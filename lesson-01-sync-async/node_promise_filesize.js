const fs = require('fs');

const getTotalFileSize = (files, total, index) => {
    return new Promise((resolve, reject) => {
//        console.log(index);
        if (index < files.length) {
            const info = fs.stat(files[index], (error, info) => {
                if (error) {
                    reject(error);
                } else {
                    total += info.size;
//                    console.log(total);
                    return resolve(getTotalFileSize(files, total, ++index))
                }
            });
        } else {
            return resolve(total)
        }
    })
}

getTotalFileSize(['001.jpg', '002.jpg', '003.jpg'], 0, 0)
    .then((total) => console.log(`Total Size: ${(total/1000000).toFixed(2)}MB`))
    .catch(error => console.log(error.message));;