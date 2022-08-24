const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = requie("inquierer");
const fs = require("fs");

const teamMembers = [];
const idArray = [];

function appMenu() {
    function createManager() {
        console.log("Please build your team");
        inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "Manager's name",
                validate: (answer) => {
                    if (answer !== "" ){
                        return true;
                    }
                    return "Please enter atleast one character.";
                },
            },
            {
                type: "input",
                name: "managerId",
                message: "Manager's ID",
                validate: (answer) => {
                    const pass = answer.match();
                    if (pass) {
                        return true;
                    }
                    return "Please enter a number higher than zero.";
                },
            },
            {
                type: "input",
                name: "managersEmail",
                message: "Manager's email",
                validate: (answer) => {
                    const pass = answer.match();
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                },
            },
            {
                type: "input",
                name: "managerNumber",
                message: "Manager's number",
                validate: (answer) => {
                    const pass = answer.match();
                },
            },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                anwers.managerEmail,
                answers.managerNumber,
            );
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam
        }
        );
    }

    function createTeam() {
        inquirer
        .prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "Finished adding members",
                ]
            }
        ])
    }
}