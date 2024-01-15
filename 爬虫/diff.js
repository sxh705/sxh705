const fs = require('fs');
const readline = require('readline');

const map = new Map();

{
    const file = fs.createReadStream('爬虫\\test3.txt'); // 替换为你的文件路径  
    const rl = readline.createInterface({
        input: file,
        crlfDelay: Infinity
    });
    rl.on('line', (line) => {
        if (line.indexOf(".") != -1) {
            line = line.substring(5)
        }
        map.set(line, 1); // 将每一行存储到Map中，键为行内容，值为1
    });
}

{
    const file = fs.createReadStream('爬虫\\正确答案.txt'); // 替换为你的文件路径  
    let i = 0
    const rl = readline.createInterface({
        input: file,
        crlfDelay: Infinity
    });
    rl.on('line', (line) => {
        let line1 = line
        if (line.indexOf(".") != -1) {
            line = line.substring(5)
        }
        i++;
        if (map.has(line) && map.get(line) < 5) {
            console.log(i, line1, map.get(line))
            map.set(line, map.get(line)+1)
        }
    });
}

