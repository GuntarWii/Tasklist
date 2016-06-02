function $(e) {
	return document.querySelector(e);
}

function $$(e) {
	return document.querySelectorAll(e);
}





var startBtn = $("#home");

startBtn.addEventListener('click', getTaskValues, false);

var taskFavorite = $(".add-to-favorite");

taskFavorite.addEventListener('click', favorite, false);

var taskCategoryBtn = $$(".category-btn");

for (var i = 0; i < taskCategoryBtn.length; i++) {
	taskCategoryBtn[i].addEventListener('click', category, false);
}

var favoriteStatus,
	taskCategory,
	taskIdNumber = 0;
var TaskListArray = [

	 task = {
	 	Taskname: "Hellow world--0!!!",
	 	Category: "work",
	 	Favorite: "no",
	 	TaskDate: undefined,
	 	TaskStatus: undefined,
	 	taskid: 1
	 },

	 task = {
	 	Taskname: "Java srcipt--1",
	 	Category: "social",
	 	Favorite: "no",
	 	TaskDate: undefined,
	 	TaskStatus: undefined,
	 	taskid: 2
	 },
	
		task = {
	 	Taskname: "ssss--2",
	 	Category: "social",
	 	Favorite: "no",
	 	TaskDate: undefined,
	 	TaskStatus: undefined,
	 	taskid: 3
	 }

];

//console.log(TaskListArray[0].Category)
function getTaskValues() {

	var taskName = $("#task-text").value,
		addToFavroite = $(".add-to-favorite"),
		taskDate = $(".add-date");


	//	console.log(addTaskName.value)

	taskIdNumber += 1

	var task = {
		Taskname: $("#task-text").value,
		Category: taskCategory,
		Favorite: favoriteStatus,
		TaskDate: undefined,
		TaskStatus: undefined,
		taskid: taskIdNumber
	}
	TaskListArray.push(task)
	console.log(TaskListArray)
	createTask()
	
}


function favorite() {

	if (this.checked == true) {
		favoriteStatus = "yes";
	} else {
		favoriteStatus = "no";
	}

}

function category() {
	switch (this.id) {
	case "work":
		taskCategory = "work"
		break;
	case "home":
		taskCategory = "home"
		break;
	case "network":
		taskCategory = "network"
		break;
	case "social":
		taskCategory = "social"
		break;
	}
}

	var taskIndex =  -1;

	for(var i = 0; i < TaskListArray.length; i++){		
		createTask()
			console.log(TaskListArray)
	}


function createTask() {
	var 
		colA = document.getElementById('col-a').offsetHeight,
		colB = document.getElementById('col-b').offsetHeight,
		taskBoks = document.createElement("div");
	
	taskIndex += 1

	taskBoks.className = "task";
	
	
	taskBoks.innerHTML = '<div class="col-md-2 checkbox"><button class="toggleBtn"><i class="centered fa fa-circle-thin fa-lg"></i></button></div><div class="col-md-10 purple task-content-small toggle-option" id=" ' + 3 + '" data-toggle-number="3" data-id-number="' + 3 + '"><p class="location-and-date location-and-date-small" id="time-now">Tomorrow</p><div class="task-name"><span>' + TaskListArray[taskIndex].Taskname + '</span></div></div><div class="col-xs-1 ' + TaskListArray[taskIndex].Category + '"></div>'
	
//
//	taskBoks.innerHTML = '<div class="col-md-2 checkbox"><button class="toggleBtn"><i class="centered fa fa-circle-thin fa-lg"></i></button></div><div class="col-md-10 purple task-content-small toggle-option" id=" ' + taskIndex + '" data-toggle-number="3" data-id-number="' + taskIndex + '"><p class="location-and-date location-and-date-small" id="time-now">Tomorrow</p><div class="task-name"><span>' + TaskListArray[taskIndex].Taskname + '</span></div></div><div class="col-xs-1 ' + TaskListArray[taskIndex].Category + '"></div>'

	if (colB < colA) {
		var todolist = document.getElementById("col-b");
	} else {
		var todolist = document.getElementById("col-a");
	}
	//      todolist.appendChild(taskBoks);
	todolist.insertBefore(taskBoks, todolist.childNodes[0]);
	
}







