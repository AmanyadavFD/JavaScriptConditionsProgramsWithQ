console.log('Practiceing Conditional Programs.');

// 1.Using the let keyword, declare a variable named sale. Assign the value true to it.
// 2.Now create an if statement. Provide the if statement a condition of sale. Inside the code block of the if statement, console.log() the string 'Time to buy!'.

var sale = true;
if(sale){
    console.log('Time to buy!');
}
else{
    console.log('Time to wait for sale.');
}

/* 
    Program - 2
*/
// Using let(var), create a variable named hungerLevel and set it equal to 7.
// Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater than 7. If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'.

// After you press run, play around with the condition by tweaking the comparison of hungerLevel by using different operators such as <=,>=,>, and <.
var hungerLevel = 7;
if(hungerLevel >= 7){
    console.log('Time to eat.');
}
else{
    console.log('We can eat later.');
}

/* 
    Program - 3
*/
// create the two variables mood and tirednessLevel.
// Let’s create an if...else statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8.
// If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bed time yet'.
// After you press “Run”, play around with the || operator and the ! operator! What happens if you negate the value of the entire statement with ! and switch to || instead of &&?

var mood = 'sleepy';
var tirednessLevel = 8;
if( mood === 'sleepy' && tirednessLevel > 8){
    console.log('time to sleep.');
}
else{
    console.log('not bed time yet.');
}

/* 
    Program - 4
*/
var numOfApples = 0;
if(numOfApples){
    console.log('Let us eat apples!');
}
else{
    console.log('No apples left!');
}