#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.magentaBright.bold("\n\t HELLO! You have accessed the Comprehensive Student Management System' \n"))

class student {
    id: string;
    name: string;
    courseEnrolled: string[];
    feesAmount: number;

    constructor( id: string, name: string, courseEnrolled: string[], feesAmount: number,){
        this.id = id
        this.name = name
        this.courseEnrolled = courseEnrolled
        this.feesAmount = feesAmount
    }
}
let baseId = 5000
let studentId: string = "";
let continueEnrollment = true;

let students: student [] = []

do{
    let result = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: chalk.yellow("Please select an option:\n"),
        choices: ["Enroll a student" , "Show student status"]  
    })
    if(result.ans === "Enroll a student"){
        let studentName = await inquirer.prompt({
            type: "input",
            name: "ans",
            message: chalk.yellow("Please enter your name")
        })

        let trimmedStudentName = (studentName.ans).trim().toLowerCase()
        let studentNameCheck = students.map(obj => obj.name)
    
        if(studentNameCheck.includes(trimmedStudentName) === false){
            if(trimmedStudentName !== ""){
                baseId++
                studentId = "STID" + baseId
        
                   console.log(chalk.green.bold("\n\tYour account has been created"));
                   console.log(chalk.magenta.bold(`Welcome, ${trimmedStudentName}!`));

                let course = await inquirer.prompt({
                    type: "list",
                    name: "ans",
                    message: chalk.yellow("Please select a course"),
                    choices: ["Graphic designing","Digital marketing", "IT"]
                })
                let courseFees = 0;
                switch (course.ans) {
                    case "Graphic designing" :
                    courseFees = 5500;
                    break;

                    case "Digital marketing" :
                    courseFees = 3500;
                    break;

                    case "IT" :
                    courseFees = 10000;
                    break;
                }
                
                let courseConfirm = await inquirer.prompt({
                    type: "confirm",
                    name: "ans",
                    message: chalk.yellow("Do you want to enroll this course?"),
                })

                if (courseConfirm.ans === true){
                    let Student = new student(studentId, trimmedStudentName, [course.ans], courseFees)

                    students.push(Student)

                    console.log
                }
            }else{
                console.log (chalk.red.bold("Invalid Name"));               
        }
        }else{
            (console.log(chalk.red("This name is already exists")));
        } 
    
    }

    else if(result.ans === "Show student status"){
        if(students.length !== 0){
            let studentNameCheck = students.map(e => e.name)
            
            let selectedStudent = await inquirer.prompt({
                type: "list",
                name: "ans",
                message: chalk.italic.underline("Please select name"),
                choices: studentNameCheck
            })

            let foundStudent = students.find(Student => Student.name === selectedStudent.ans)

            console.log("Student information");
            console.log(foundStudent);
            console.log("\n");
      
        }else{
            chalk.bgCyanBright(console.log("Record is empty"));            
        }
    }

        let userConfirm = await inquirer.prompt({
            type: "confirm",
            name: "ans",
            message: chalk.blueBright("Do you want to continue")
        })

        if(userConfirm.ans === false){
            continueEnrollment = false
        }

}while(continueEnrollment)








 




