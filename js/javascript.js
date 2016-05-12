//function tooggle() {
//
//	function $(e) {
//		return document.querySelector(e);
//	}
//
//	function $$(e) {
//		return document.querySelectorAll(e);
//	}
//
//	var toggle = $$(".toggle-option");
//	for (var i = 0; i < toggle.length; i++) {
//		toggle[i].addEventListener('click', togller, false);
//	}
//	function togller() {
//		var current = this.dataset.toggleNumber,
//			options = $$(".option");
//
//		//		console.log(this)
//		for (var i = 0; i < options.length; i++) {
//			var hiddenAtr = options[i].dataset.toggleNumber;
//
//			if (current == hiddenAtr) {
//
//				options[i].classList.toggle("hidden");
//
//				console.log(options[i])
//					//Parbauda piespiestajam elementu vai viņam ir klase hidden
//				if (options[i].className.indexOf("hidden") == -1) {
//					//ja tam nav klases hidden tad eijam cauri visiem elementiem ar option klasi	
//					for (var x = 0; x < options.length; x++) {
//						
//						// šito parbaudi ka else if priekš optiom[i] if
//						// tas for loop nau vjadzīgs
//						// pieviento klasi tiem kam nau hiden elementa
//						if (options[x].className.indexOf("hidden") == -1 && options[x].getAttribute("data-toggle-number") != current) {
//							options[x].classList.toggle("hidden");
//						}
//					}
//				}
//				return;
//			}
//
//		}
//	}
//
//
//
//}
////
//tooggle()
//
//
////docclick = function(e){
//// var target = e.target
////{
////
////}
////while(target != otion)
////{
////if(target ==document.body){option.className.add("hidden")}
////return;
////----document.removeEventlstener("click" docClcik)
////}
////
////}