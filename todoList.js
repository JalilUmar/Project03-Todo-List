import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What do you want to add in your todo? "
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more ?"
        }
    ]);
    console.log(answer);
    const { addMore, todo } = answer;
    loop = addMore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Please add valid input.");
    }
}
if (todos.length > 0) {
    console.log("Your todo list: ");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No Todos found.");
}
