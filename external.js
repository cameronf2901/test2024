function random(){
	let r = Math.floor(Math.random()*10);
	//.floor() to round down to whole numbers
	//range is 0 up to but not including 10
	
	//create a var with the first part
	let page = document.getElementById("demo");
	page.innerHTML = r;
	
	//document.getElementByID("demo").innerHTML = r;
	
	page.style.backgroundColor = "olive";
	// same as saying = document.getElementByID("demo").style.backgroundColor = "olive";
	page.stle.color = "white";
	
}