//process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
	process.stdout.write('\r|  ');
}, 100);
setTimeout(() => {
	process.stdout.write('\r|  ');
}, 300);
setTimeout(() => {
	process.stdout.write('\r-  ');
}, 500);
setTimeout(() => {
	process.stdout.write('\r\\  ');
}, 600);
setTimeout(() => {
	process.stdout.write('\r\\  ');
}, 700);
setTimeout(() => {
	process.stdout.write('\r-  ');
}, 900);
setTimeout(() => {
	process.stdout.write('\r|  ');
}, 1000);
setTimeout(() => {
	process.stdout.write('\r|  \n');
}, 1200);
// setTimeout(() => {
// 	console.log('\n');

// }, 3000);