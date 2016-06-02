function $(e) {
	return document.querySelector(e);
}

function $$(e) {
	return document.querySelectorAll(e);
}




document.body.addEventListener('click', function () {
	var target = event.target;
	var task = $(".task-content-small");

	while (target.parentNode) {
		if (target.hasAttribute("data-id-number")) {
			var currentAtr = target.getAttribute("data-id-number");
			break;
		}
		target = target.parentNode;


		}

	var currentAtr;
	
//	console.log(currentAtr)
	
		for (var i = 0; i < TaskListArray.length; i++) {


			if (TaskListArray[i].taskid == currentAtr) {
//				console.log("this")
//				console.log(TaskListArray[currentAtr].Taskname + "ssss")
//				var sidOptTaskName = $(".side-opt-task-name");
//				sidOptTaskName.innerHTML = TaskListArray[currentAtr].Taskname
				
				sideOption(currentAtr)
				
			}
			
		}

});



function sideOption(currentAtr){
	var sidOptTaskName = $(".side-opt-task-name");
	console.log(sidOptTaskName)
	
	sidOptTaskName.innerHTML = TaskListArray[currentAtr].Taskname

}



//		var current = target,
//			currentAtr = current.getAttribute("data-id-number");
//		console.log(current.getAttribute("data-id-number")
//			//		if(target.classList.contains("task-content-small")){
//			//			console.log("aaaaaaa")
//			//			break;
//			//		}
//
////		for (var i = 0; i < TaskListArray.length; i++) {
////
////
////			if (TaskListArray[i].id == currentAtr) {
////				console.log(this)
////			}
