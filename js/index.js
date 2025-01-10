// Prevent us from attempting to use variables
// that are not declared
"use strict"
/*
// for loop
for (let i = 0; i < 8; i++) {
    console.log(i);             // output: 0, 1, 2, 3, 4, 5, 6, 7
}    

for (let i = 0; i < 4; i++) {
    console.log(i);             // output: 0, 1, 2, 3
} 

// for loop using break
for (let i = 0; i < 8; i++) {
    if (i === 6) {
        break;                  // exit the loop when i is 6
    }
    console.log(i);             // output: 0, 1, 2, 3, 4, 5
}   

// while loop
let i = 0;
while( i < 4) {
    console.log(i);             // output: 0, 1, 2, 3
    i++;                        // increments by 1
}

// do while loop
let i = 0;
do {
    console.log(i);             // output: 0, 1, 2
    i++;                        // increments by 1
} while (i < 3);  

// loop using break labeled
let a = 0;
let b = 0;
labelTrialLoop: while (true) {
    console.log("outer loop:", a);                 // output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    a += 1;
    b = 1;
    while (true) {
        b += 1;
        if(b === 10 && a === 10) {                 // if condition met, break loop statement
           console.log("breaking out of loop");    // output: breaking out of loop
           break labelTrialLoop;
        } else if (b === 10) {                     // if condition not met, then break
          break;
        }
    }    
}

// loop using continue 
let i = 0;
let z = 0;
while (i < 5) {                  // while i < 5
   i++;                          // increment i by 1
   if (i === 3) {                // checks if two operands are equal and if so, continues
    continue;
   }
   z += i;
   console.log(z);               // output: 1, 3, 7, 12
} */