function fibonacci(num) {
// your code here
	let a = 0, b = 1, c = a + b;
	for(let i = 0; i < num.length; i++){
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}

module.exports = fibonacci;
