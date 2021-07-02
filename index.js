
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}
// create new task objects by calling the newTask() function with each declaration
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
// const tasks = [task1, task2];

// access the task object's methods using dot notation
task1.logState(); // => Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // => Clean Cat Litter has been completed
