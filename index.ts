#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 5 + 1);

const userAnswer = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "Please guess a number to match it with computer",
    },
])
if (randomNumber === userAnswer.userNumber) {
    console.log("Hoorah you guessed it correct!")
} else {
    console.log("Sorry, You coudn't guessed it correctly")
}