//function toDoList() {
//
//	function $(e) {
//		return document.querySelector(e);
//	}
//
//	function $$(e) {
//		return document.querySelectorAll(e);
//	}
//
//	function createTask(category) {
//
//		var taskTexT = $("#task-text").value,
//			itemTexts = taskTexT,
//			colA = document.getElementById('col-a').children.length,
//			colB = document.getElementById('col-b').children.length,
//			taskBoks = document.createElement("div"),
//			taskCount = 1;
//
//		taskBoks.className = "task";
//
//		taskBoks.innerHTML = '<div class="col-md-2 checkbox"><button class="toggleBtn"><i class="centered fa fa-circle-thin fa-lg"></i></button></div><div class="col-md-10 purple task-content-small"><p class="location-and-date location-and-date-small" id="time-now">Tomorrow</p><div class="task-name"><span>' + itemTexts + '</span></div></div><div class="col-xs-1 ' + category + '"></div>'
//
//		if (colB < colA) {
//			var todolist = document.getElementById("col-b");
//		} else {
//			var todolist = document.getElementById("col-a");
//		}
//		//      todolist.appendChild(taskBoks);
//		todolist.insertBefore(taskBoks, todolist.childNodes[0]);
//	}
//
//   // Pogas priekš kategorijām
//	var home = $("#home"),
//		work = $("#work"),
//		network = $("#network"),
//		social = $("#social"),
//		favorite = $(".favorite");
//
//
//	home.onclick = addNewTask;
//	work.onclick = addNewTask;
//	network.onclick = addNewTask;
//	social.onclick = addNewTask;
//
//
//
//
//	function addNewTask() {
//
//		var category,
//			favorite;
//
//		if (this == home) {
//			category = "red"
//		} else if (this == work) {
//			category = "yellow"
//		} else if (this == network) {
//			category = "pink"
//		} else if (this == social) {
//			category = "green"
//		}
//
//
//	}
//
//}
//
//toDoList()