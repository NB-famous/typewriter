const sentence = "hello there from lighthouse labs";

// ******* Important note *******//
//note:console.log will add a new line character (\n) to the end of the string. 
//However, in Node we can use process.stdout.
//write instead to have more control and avoid automatically adding an extra "newline character" 
//at the end each time.

let typewritter = (string) =>{
 	for (let i = 0; i < string.length; i++) {
	setTimeout(() => {
		process.stdout.write(string[i]);  

	}, 50*i)
	}
}

console.log("\n");

typewritter(sentence + '\n');