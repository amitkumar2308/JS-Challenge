//Loops are used to repeatedly run a block of code until a certain condition is met.

//Types of Loops:
//for loop
//while loop
//do-while loop



//for loop:
//A for loop runs a block of code for a specified number of times.

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0 1 2 3 4



//while loop:
//A while loop runs the code block as long as the condition is true.

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// Output: 0 1 2 3 4


//do-while loop:
//This loop will always run at least once, even if the condition is false.

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// Output: 0 1 2 3 4
