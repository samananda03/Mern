const os = require('os');

console.log('Operating System:', os.platform());
console.log('Hostname:', os.hostname());
console.log('Number of CPUs:', os.cpus().length);
console.log('Free Memory:', os.freemem() / (1024 * 1024) + ' MB');

const path = require('path');

const filePath = '/path/to/file.txt';

console.log('Joined Path:', path.join('directory', 'file.txt'));
console.log('Directory Name:', path.dirname(filePath));
console.log('Base Name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));

