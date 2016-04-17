var ball = document.querySelector(".ball");
var pole = document.querySelector(".pole");
pole.addEventListener("click", move);
pole.addEventListener("mousemove", pressMove);
ball.addEventListener("mousedown", flag);
ball.addEventListener("mouseup", flag);
function move(e){
	ball.style.transition = "all 1s ease";
	var x = e.clientX;
	var y = e.clientY;
	ball.style.top = y + "px";
	ball.style.left = x + "px";
}
var flag = false;
function flag(e){
	flag = !flag;
	console.log(flag)
	e.preventDefault();
	ball.style.transition = "all 0s ease";

}
function pressMove(e){
	if(flag){
	var x = e.clientX;
	var y = e.clientY;
	ball.style.top = y + "px";
	ball.style.left = x + "px";
	}

		
}