const command = process.argv[2];
const param = process.argv.slice(3);

const todocontroller = require("./controller/TodoController");

switch (command) {
  case "show":
    
    todocontroller.show();

    break;

  case "add":
    todocontroller.add(param);

    break;

  case "delete":
    todocontroller.delete(param);

    break;

  case "update":
    todocontroller.update(param);

    break;

  default:

  todocontroller.message("masukan command yang benar")

  break;
}
