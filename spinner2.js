const animatingSymbol = [
    obj1 = {
        char: '|',
        delayTime: 100
    },
    obj2 = {
        char: '|',
        delayTime: 300
    },
    obj3 = {
        char: '-',
        delayTime: 500
    },
    obj4 = {
        char: '\\',
        delayTime: 600
    },
    obj5 = {
        char: '\\',
        delayTime: 700
    },
    obj6 = {
        char: '-',
        delayTime: 900
    },
    obj7 = {
        char: '|',
        delayTime: 1000
    },
    obj8 = {
        char: '|',
        delayTime: 1200
    }
];
for(const objKey of animatingSymbol){
    setTimeout(() => {

        //process.stdout.write('\r  ', objKey.char)
        process.stdout.write(`\r${objKey.char}`)


}, objKey.delayTime);
}
setTimeout(() => {
	console.log('\n');

}, 2000);
