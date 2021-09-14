const fs = require('fs').promises;
const path = require('path');


// se a rootdir foi enviada, usamos ela, caso contrario utilizamos a path.resolve
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {

    for (let file of files) {
        const fileFullPAth = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPAth);

        if (/\.git/g.test(fileFullPAth)) continue;
        if (/node_modules/g.test(fileFullPAth)) continue;

        if (stats.isDirectory()) {

            readdir(fileFullPAth);
            continue;
        }


        if (!/\.css$/g.test(fileFullPAth)) continue;
        console.log(fileFullPAth);
    }
}
readdir('../');

//le os arquivos e retorna um array com os arquivos da pasta
// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));