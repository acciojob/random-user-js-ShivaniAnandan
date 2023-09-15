//your code here
function makeid(l,allcharacters) {
  // write your code here
	let idArray = allcharacters;
	let randomId = ""
	for (let i = 0; i < l; i++) {
		randomId+= allcharacters[Math.floor(Math.random()*allcharacters.length)];
	}
	return randomId;
}

const allCharacters = [];
for (let i = 97; i <= 122; i++) {
  allCharacters.push(String.fromCharCode(i));
}
for (let i = 65; i <= 90; i++) {
  allCharacters.push(String.fromCharCode(i));
}
for (let i = 1; i <= 9; i++) {
  allCharacters.push(i.toString());
}

console.log(allCharacters);

// Do not change the code below.
const l = prompt("Enter a number.");

alert(makeid(l,allCharacters));
