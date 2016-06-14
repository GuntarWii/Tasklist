function $(e) {
	return document.querySelector(e);
}

function $$(e) {
	return document.querySelectorAll(e);
}


var home = $(".first");

	home.addEventListener('click', categryFiltr, false);


//document.body.addEventListener('click', function () {
//	var target = event.target;
//	var task = $("li[data-category-filter='yes']");
//
//	while (target.parentNode) {
//		if (target.hasAttribute("data-id-number")) {
//			var currentAtr = target.getAttribute("data-id-number");
//			break;
//		}
//		target = target.parentNode;
//		
//
//		}



function categryFiltr(){
	
	$(".col-a").innerHTML = ""
	$(".col-b").innerHTML = ""
	
			for (var i = 0; i < TaskListArray.length; i++) {


			if (TaskListArray[i].Category == "social") {
				
				console.log(TaskListArray[i].taskid)
				var TasknameId = TaskListArray[i].taskid;
				
							createTask(TasknameId)
////							createTask(Taskname,Category)
//							console.log(Taskname,Category)
			}
				
				
		}
}