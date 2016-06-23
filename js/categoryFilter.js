function $(e) {
	return document.querySelector(e);
}

function $$(e) {
	return document.querySelectorAll(e);
}


var datacat= $$(".cat-filtr");

    for(var i = 0; i < datacat.length; i++){
        datacat[i].addEventListener('click', categryFiltr, false);
    }



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
	 var categoryFilterClass = this.getAttribute("data-category-filter")
  
	$(".col-a").innerHTML = ""
	$(".col-b").innerHTML = ""
    $(".favorite-task-block").innerHTML = ""
	
			for (var i = 0; i < TaskListArray.length; i++) {


			if (TaskListArray[i].Category == categoryFilterClass) {
				
				console.log(TaskListArray[i].taskid)
				var TasknameId = TaskListArray[i].taskid;
				
							createTask(TasknameId)
////							createTask(Taskname,Category)
//							console.log(Taskname,Category)
			}else if(categoryFilterClass == "all"){
            
                    for(var i = 0; i < TaskListArray.length; i++){
                        
                        createTask(i)
                    }
            }
				
				
		}
    

}