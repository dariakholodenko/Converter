function convertBD() {
	let bin = document.querySelector("#bin").value;
	document.querySelector("#dec").value = twoTOten(bin);
}

function convertDB() {	
	let dec = document.querySelector("#dec").value;
	document.querySelector("#bin").value = tenToTwo(dec);
}

function twoTOten(num) {
	let ret = 0;
	let cnt = 1;
	
	while(num >= 1) {
		ret += cnt*(num % 10);
		num = Math.floor(num/10);
		cnt *= 2;
	}
	
	return ret;
}

function tenToTwo(num) {
	let ret = 0;
	let cnt = 1;
	
	while(num >= 1) 	{
		ret += cnt*(num%2);
		num = Math.floor(num/2);
		cnt *= 10;
	}
	
	return ret;
}

function restrict_bin(event) {
	let input = [];
	let code = event.which;
	
	for(i = 48; i < 50; i++)
		input.push(i);
		
	if(!(input.indexOf(code) >= 0))
		event.preventDefault();
}

function restrict(event) {
	let input = [];
	let code = event.which;
	
	for(i = 48; i < 58; i++)
		input.push(i);
		
	if(!(input.indexOf(code) >= 0))
		event.preventDefault();
}
