function $(e) {
	return document.querySelector(e);
}

function $$(e) {
	return document.querySelectorAll(e);
}

var taskStatusBtn = $$(".task-status");


for (var i = 0; i < taskStatusBtn.length; i++) {
    taskStatusBtn[i].addEventListener('click', taskStatus, false);
}


function taskStatus() {

    var target = this;
    var taskStatus = $("status-btn");
    var test = $(".main-body")

    while (target.parentNode) {
        if (target.hasAttribute("data-id-number")) {
            var currentAtr = target.getAttribute("data-id-number");

            break;
        }

        target = target.parentNode;

    }
    target.classList.toggle("checked")
    
    var colb = $(".col-b"),
        cola = $(".col-a");
    
    if(colb.offsetHeight < cola.offsetHeight){
        var col = colb
    }else{
        var col =cola
    }
    
    if(target.classList.contains("checked")){
       
        col.appendChild(target)

    }else if(!target.classList.contains("checked")){
        col.insertBefore(target, col.firstChild)
    }

}


function moveEle(ele) {
    var ele = document.getElementsByTagName("li");
    var fourEle = Array.prototype.slice.call( ele, 0, 1);
    var ul = document.getElementsByTagName("ul")[0];
    
    while (fourEle.length > 0) {
        ul.appendChild(fourEle.shift());
    }
}








//document.body.addEventListener('click', function () {
//	var target = event.target;
//	var taskStatus = $("status-btn");
//
//	while (target.parentNode) {
//		if (target.hasAttribute("data-id-number")) {
//			var currentAtr = target.getAttribute("data-id-number");
//		
//			break;
//		}
//		
//		target = target.parentNode;
//
//		}
//
//	var currentAtr;
//	
////	console.log(currentAtr)
//	
//		for (var i = 0; i < TaskListArray.length; i++) {
//
//
//			if (TaskListArray[i].taskid == currentAtr) {
////				console.log("this")
////				console.log(TaskListArray[currentAtr].Taskname + "ssss")
////				var sidOptTaskName = $(".side-opt-task-name");
////				sidOptTaskName.innerHTML = TaskListArray[currentAtr].Taskname
//				console.log(TaskListArray[i].taskid)
//				sideOption(currentAtr)
//				
//			}
//			
//		}
//
//});