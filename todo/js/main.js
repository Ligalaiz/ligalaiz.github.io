let tasker = {
  construct: function() {
    this.selectElements();
    this.bindEvents();
    this.scanTaskList();
  },
  selectElements: function() {
    this.taskInput = document.getElementById("input-task");
    this.taskList = document.getElementById("tasks");
    this.taskListChildren = this.taskList.children;
    this.addButton = document.getElementById("add-task-btn");
    this.errorMessage = document.getElementById("error");
  },
  buildTask: function() {
    let taskListItem, taskCheckbox, taskValue, taskButton, taskTrash;
    taskListItem = document.createElement("li");
    taskListItem.setAttribute("class", "task");
    // checkbox
    taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");
    // task value
    taskValue = document.createTextNode(this.taskInput.value);
    // delete button
    taskButton = document.createElement("button");
    // trash icon
    taskTrash = document.createElement("i");
    taskTrash.setAttribute("class", "fa fa-trash");
    // insert trash can icon into button
    taskButton.appendChild(taskTrash);

    // append elements to taskList
    taskListItem.append(taskCheckbox);
    taskListItem.append(taskValue);
    taskListItem.appendChild(taskButton);

    // add task to task list
    this.taskList.appendChild(taskListItem);
  },
  error: function() {
    this.errorMessage.style.display = "block";
  },
  addTask: function() {
    let taskValue = this.taskInput.value;
    this.errorMessage.style.display = "none";

    if (taskValue === "") {
      this.error();
    } else {
      this.buildTask();
      this.taskInput.value = "";
      this.scanTaskList();
    }
  },
  enterKey: function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      this.addTask();
    }
  },
  bindEvents: function() {
    // add clisk event to button
    this.addButton.onclick = this.addTask.bind(this);

    // add enter key to task textbox
    this.taskInput.onkeypress = this.enterKey.bind(this);
  },
  scanTaskList: function() {
    let taskListItem, chekcBox, deleteButton;

    //  Loop through all list elements
    for (let i = 0; i < this.taskListChildren.length; i++) {
      taskListItem = this.taskListChildren[i];
      // select checkbox and delete button
      checkBox = taskListItem.getElementsByTagName("input")[0];
      deleteButton = taskListItem.getElementsByTagName("button")[0];

      // bind onclick event to the checkbox
      checkBox.onclick = this.completeTask.bind(this, taskListItem, checkBox);

      // add click event to the delete button
      deleteButton.onclick = this.deleteTask.bind(this, i);
    }
  },
  deleteTask: function(i) {
    this.taskListChildren[i].remove();
    this.scanTaskList();
  },
  completeTask: function(taskListItem, checkBox) {
    if (checkBox.checked) {
      taskListItem.className = "task completed";
    } else {
      this.incompleteTask(taskListItem);
    }
  },
  incomleteTask: function(taskListItem) {
    taskListItem.className = "task";
  }
};
