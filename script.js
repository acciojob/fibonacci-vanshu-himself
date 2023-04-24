function fibonacci(num) {
	let f;
// your code here
	let f[0]=0;
	let f[1]=1;
	let fab=1;
	for(let i=2;i<=num;i++){
		 f[i] = f[i-1] + f[i-2];
	}return f[n];
}

module.exports = fibonacci;
