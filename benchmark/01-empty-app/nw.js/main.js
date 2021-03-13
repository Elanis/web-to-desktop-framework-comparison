const initialDate = Date.now();

console.log(initialDate);

window.addEventListener('load', () => {
	console.log('Starting time: ' + (Date.now() - initialDate) + 'ms');
});