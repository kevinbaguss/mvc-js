const Todo = require("../model/Tode");
const todoview = require("../view/TodoView");

class todocontroller {
  static show() {
    let todos = Todo.show();
    todoview.show(todos);
  }

  static add(todo) {
    Todo.add(todo);
  }

  static delete(todo) {
    Todo.delete(todo)
  }

  static update(todo) {
    Todo.update(todo)
  }
 
  static message(msg) {
    todoview.message(msg);
  }
}

module.exports = todocontroller;
