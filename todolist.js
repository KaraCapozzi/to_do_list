var toDo = {
  tasks: [
    {
      description: "Cook",
      priority: "high",
      done: true
    },

    {
      description: "Sleep",
      priority: "high",
      done: false
    }
  ],
  printTasks: function() {
    this.tasks.forEach(function (task, index) {
      var check = " ";
      if (task.done) {
        check = "X"
      }
      console.log("[" + check + "]" + task.description + " -> " + task.priority);
    });
  },
  addTask: function(task) {
    this.tasks.push(task)
  }
}

toDo.addTask({
  description: "JS Homework",
  priority: "super high",
  done: false
});
toDo.addTask({
  description: "go to jS 101",
  priority: "super high",
  done: true
});
toDo.printTasks();
