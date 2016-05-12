function tooggle() {

	function $(e) {
		return document.querySelector(e);
	}

	function $$(e) {
		return document.querySelectorAll(e);
	}

	var toggle = $$(".toggle-option");
	for (var i = 0; i < toggle.length; i++) {
		toggle[i].addEventListener('click', togller, false);
		//		toggle[i].addEventListener('click', docClick, false);
	}



	function togller(event) {
		var current = this.dataset.toggleNumber,
			options = $$(".option"),
			dopOption = $(".details"),
			dopOptTarget = event.target;

		//		console.log(this)
		for (var i = 0; i < options.length; i++) {
			var hiddenAtr = options[i].dataset.toggleNumber;

			if (current == hiddenAtr) {

				options[i].classList.toggle("hidden");
				// Ja viņš nav vienāds ar piespiesto elementu un tam nav klases hidden
			} else if (options[i].className.indexOf("hidden") == -1) {

				if (dopOption.className.indexOf("hidden") == -1) {

					console.log(dopOptTarget.parentElement)
					if (dopOptTarget.parentElement == $(".header-opt-btn")) {
						options[i].classList.toggle("hidden");
					}
					// ja taisa parbaude a target ja tiek klikšķināts arpus ditiles lauka tad toggle ja ne tad radit dop options				
				} else {
					options[i].classList.toggle("hidden");
					console.log("tssss")
				}
			}
		}


	}

	function sideOption() {
		console.log("testing")
	}
	//
	//	function docClick(e) {
	//		var target = e.target;
	////		console.log(this.children.length)
	////		console.log(this.childNodes)
	//		for(var i = 0; i < this.children.length; i++){
	////			console.log(this.childNodes[i])
	//			
	//			if(this.children[i].classList.contains("task-value")){
	//				console.log("big task value")
	//				
	//				var test = this.children[i];
	//				
	//				console.log(test)
	//			}else if(this.children[i].classList.contains("task-name")){
	////				console.log(this.children[i])
	//				
	//				var mytest = this.children[i];
	//				
	//				console.log(mytest)
	//				console.log(mytest.children[0])
	//				if(mytest.classList.contains("task-value")){
	//					
	//					console.log("more task")
	//				}else{
	//					console.log("test")
	//				}
	//			}
	//		}
	////		
	//
	//
	////sourcetree
	//		
	//	
	//		
	//	}


}
//
tooggle()


//docclick = function(e){
// var target = e.target
//{
//
//}
//while(target != otion)
//{
//if(target ==document.body){option.className.add("hidden")}
//return;
//----document.removeEventlstener("click" docClcik)
//}
//
//}