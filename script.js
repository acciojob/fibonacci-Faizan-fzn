function fibonacci(num) {
// your code here
	if(num <= 0){
		return "invalid input"
	}
	elseif(num == 1){
		return 0
	} 
	elseif(num == 2){
		return 1
	}
	else{
		return (num - 1) + (num - 2)
	}
}

module.exports = fibonacci;
