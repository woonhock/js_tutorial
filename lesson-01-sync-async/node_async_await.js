const fs = require('fs').promises;

async function getFileSize(file) {
    try {
        const info = await fs.stat(file);
        return info.size;
    } catch (error) {
        return error;
    }
}

async function getTotalFileSize(file1, file2, file3) {
    try {
        const total = await getFileSize(file1) + await getFileSize(file2) + await getFileSize(file3);
        console.log(total);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

getTotalFileSize('001.jpg', '002.jpg', '003.jpg');