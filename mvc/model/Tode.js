const fs = require("fs");
class todo {
  constructor(id, task, status) {
    this.id = id;
    this.task = task;
    this.status = status || false;
  }
  static gettodo() {
    let data = fs.readFileSync("./data.json", "utf-8");
    let parsedata = JSON.parse(data);
    let todos = parsedata.map((el) => {
      const { id, task, status } = el;
      return new todo(id, task, status);
    });
    return todos;
  }

  static show() {
    let todos = this.gettodo();
    return todos;
  }

  // nyimpan data json
  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
  }

  static add(Todo) {
    let todos = this.gettodo();
    let id = todos[todos.length - 1].id + 1;
    let task = Todo[0];
    let temp = new todo(id, task);
    todos.push(temp);
    this.save(todos);
  }

  static delete(todo) {
    let todos = this.gettodo();
    let id = Number(todo[0]);
    todos = todos.filter((todo) => todo.id !== id);
    //console.log(todos)
    this.save(todos);
  }

  static update(todo) {
    let todos = this.gettodo();
    let id = Number(todo[0]);
    let task = todo[1];
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.task = task;
      }
      return todo;
    });
    //console.log(todos)
    this.save(todos);
  }
}

module.exports = todo;
