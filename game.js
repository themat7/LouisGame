var start = document.getElementById("start");
start.addEventListener("click", function(){
	var content = document.getElementById("content");
	if(content.textContent === "Game begun"){
     	content.textContent="Start screen";

	}
	else{
		content.textContent ="Game begun" ;
      
	}
if(content.textContent === "Game begun"){
	body.background-image("pic1.png");
}

	
}
);
