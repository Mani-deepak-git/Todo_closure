function createToDoList() {
    const tasks = [];
    return {
        addTask: function(task) {
            tasks.push(task);
            console.log("Added: ${task}");
        },
        viewTasks: function() {
            console.log("Your Tasks:");
            tasks.forEach((task, index) => console.log("${index + 1}. ${task}"));
        },
        removeTask: function(index) {
            if (index > 0 && index <= tasks.length) {
                const removed = tasks.splice(index - 1, 1);
                console.log("Removed: ${removed[0]}");
            } else {
                console.log("Invalid index!");
            }
}
};
}
const myToDoList=createToDoList();
myToDoList.addTask("Learn closure");
myToDoList.viewTasks();
myToDoList.removeTask(1);
myToDoList.viewTasks();