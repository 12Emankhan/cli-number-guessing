#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number 
// 2) user unput for random number 
// 3)compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomnumber);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number from 1-10",
    }
]);
if (answers.userguessednumber === randomnumber) {
    console.log("congratulation you guess correct number");
}
else {
    console.log("you guess wrong number");
}
