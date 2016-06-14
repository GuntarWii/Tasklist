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
		taskid: 0
	 },

	 task = {
		Taskname: "Java srcipt--1",
		Category: "social",
		Favorite: "no",
		TaskDate: undefined,
		TaskStatus: undefined,
		taskid: 1
	 },

		task = {
		Taskname: "ssss--2",
		Category: "social",
		Favorite: "no",
		TaskDate: undefined,
		TaskStatus: undefined,
		taskid: 2
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

//var home = $(".first");
//
//	home.addEventListener('click', categryFiltr, false);
//
//function categryFiltr(){
//	
//	$(".col-a").innerHTML = ""
//	$(".col-b").innerHTML = ""
//	
//			for (var i = 0; i < TaskListArray.length; i++) {
//
//
//			if (TaskListArray[i].Category == "social") {
//				
//				console.log(TaskListArray[i])
//				var TasknameId = TaskListArray[i].TasknameId,
//					Category = TaskListArray[i].Category;
//				
//							createTask(1)
//////							createTask(Taskname,Category)
////							console.log(Taskname,Category)
//			}
//		}
//}
// janonem swich un taskCategory = this id
var taskIndex = -1;

for (var i = 0; i < TaskListArray.length; i++) {
	createTask()

}


function createTask(TasknameId) {
	var
		colA = document.getElementById('col-a').offsetHeight,
		colB = document.getElementById('col-b').offsetHeight,
		taskBoks = document.createElement("div"),
		favorite = $(".main-body");


	//	taskIndex += 1


	if (TasknameId !== undefined) {

		taskIndex = TasknameId

	} else {
		taskIndex += 1
	}


	taskBoks.className = "task";



	if (TaskListArray[taskIndex].Favorite == "yes") {
		taskBoks.innerHTML = '<section class="main-task offset-1 offset-10m">\
					<div class="col-1 checkbox">\
						<button class="toggleBtn">\
							<i class="centered fa fa-circle-thin fa-lg"></i>\
						</button>\
					</div>\
					<div class="col-md-10 purple big-task-content toggle-option" data-toggle-number="3">\
						<p class="location-and-date"><a href="#"><span class="fa fa-map-marker fa-lg"></span></a> At Tesco | Next monday</p>\
						<a href="#" class="favourite"><span class="fa fa-star"></span></a>\
						<h1 class="task-value">' + TaskListArray[taskIndex].Taskname + '</h1>\
					</div>\
					<div class="col-md-1 red"></div>\
				</section>'


		favorite.insertBefore(taskBoks, favorite.childNodes[0]);
	} else {
		var col = (colB < colA) ? "col-b" : "col-a";
		taskBoks.innerHTML = '\
		<div class="col-md-2 checkbox">\
			<button class="toggleBtn">\
				<i class="centered fa fa-circle-thin fa-lg"></i>\
			<button>\
		</div>\
<div class="col-md-10 purple task-content-small toggle-option" id=" ' + taskIndex + '" data-toggle-number="3" data-id-number="' + taskIndex + '">\
<p class="location-and-date location-and-date-small" id="time-now">Tomorrow</p>\
	<div class="task-name">\
<span>' + TaskListArray[taskIndex].Taskname + '\
</span>\
	</div>\
</div>\
		<div class="col-xs-1 ' + TaskListArray[taskIndex].Category + '">\
		</div>';

		var todolist = document.getElementById(col);
		todolist.insertBefore(taskBoks, todolist.childNodes[0]);
		
			var col = (colB < colA) ? "col-b" : "col-a";
	var todolist = document.getElementById(col);
	todolist.insertBefore(taskBoks, todolist.childNodes[0]);
	}



	//	if (colB < colA) {
	//		var todolist = document.getElementById("col-b");
	//	} else {
	//		var todolist = document.getElementById("col-a");
	//	}
	//      todolist.appendChild(taskBoks);


	addEventListener()
}

function addEventListener() {
	var toggle = $$(".toggle-option");
	for (var i = 0; i < toggle.length; i++) {
		toggle[i].addEventListener('click', togller, false);
	}

}


function togller(event) {
	var current = this.dataset.toggleNumber,
		options = $$(".option"),
		dopOption = $(".details"),
		dopOptTarget = event.target;

	//		console.log(this)
	for (var i = 0; i < options.length; i++) {
		var hiddenAtr = options[i].dataset.toggleNumber;

		//			console.log(hiddenAtr)

		if (current == hiddenAtr) {

			options[i].classList.toggle("hidden");
			// Ja viņš nav vienāds ar piespiesto elementu un tam nav klases hidden
		} else if (options[i].className.indexOf("hidden") == -1) {

			if (dopOption.className.indexOf("hidden") == -1) {

				if (dopOptTarget.parentElement == $(".header-opt-btn")) {
					options[i].classList.toggle("hidden");
				}
				// ja taisa parbaude a target ja tiek klikšķināts arpus ditiles lauka tad toggle ja ne tad radit dop options				
			} else {
				options[i].classList.toggle("hidden");
			}
		}
	}


}