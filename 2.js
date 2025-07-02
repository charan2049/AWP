const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter a number: ', (n) => {
  const num = parseInt(n);
  if(isArmstrong(n)){
	console.log(`The given number is an armstrong number`);
}
  else{
	console.log(`The given number is not an armstrong number`);

}
  rl.close();
});
function isArmstrong(n) {
	let temp = n;
	let res = 0;
	while(temp>0){
		let flag = temp%10;
		res+=(flag*flag*flag);
		temp = Math.floor(temp/10);
	}
	if(res==n) return true;
	return false;
}
