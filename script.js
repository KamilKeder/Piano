var button = document.querySelectorAll(".button");

var C1 = new Audio("mp3/C1.mp3");
var C2 = new Audio("mp3/C2.mp3");
var C31 = new Audio("mp3/C31.mp3");
var C32 = new Audio("mp3/C32.mp3");

var D1 = new Audio("mp3/D1.mp3");
var D2 = new Audio("mp3/D2.mp3");
var D31 = new Audio("mp3/D31.mp3");
var D32 = new Audio("mp3/D32.mp3");

var E1 = new Audio("mp3/E1.mp3");
var E2 = new Audio("mp3/E2.mp3");

var F1 = new Audio("mp3/F1.mp3");
var F2 = new Audio("mp3/F2.mp3");
var F31 = new Audio("mp3/F31.mp3");
var F32 = new Audio("mp3/F32.mp3");

var G1 = new Audio("mp3/G1.mp3");
var G2 = new Audio("mp3/G2.mp3");
var G31 = new Audio("mp3/G31.mp3");
var G32 = new Audio("mp3/G32.mp3");

var A1 = new Audio("mp3/A1.mp3");
var A2 = new Audio("mp3/A2.mp3");
var A31 = new Audio("mp3/A31.mp3");
var A32 = new Audio("mp3/A32.mp3");

var B1 = new Audio("mp3/B1.mp3");
var B2 = new Audio("mp3/B2.mp3");




for (var i=0; i < button.length; i++){
	button[i].addEventListener("click",function(e){
		eval(this.id).pause();
		eval(this.id).currentTime = 0;
		eval(this.id).play();

	})
}
document.addEventListener("keydown", (e) =>{
	if(e.keyCode == "81")
	{
		if (e.repeat) return;
		C1.pause();
		C1.currentTime = 0;
		C1.play();
		document.querySelector("#C1").classList.add("czarny");
	}
	if(e.keyCode == "50")
	{
		if (e.repeat) return;
		C31.pause();
		C31.currentTime = 0;
		C31.play();
		document.querySelector("#C31").classList.add("bialy");
	}
	if(e.keyCode == "87")
	{
		if (e.repeat) return;
		D1.pause();
		D1.currentTime = 0;
		D1.play();
		document.querySelector("#D1").classList.add("czarny");
	}
	if(e.keyCode == "51")
	{
		if (e.repeat) return;
		D31.pause();
		D31.currentTime = 0;
		D31.play();
		document.querySelector("#D31").classList.add("bialy");
	}
	if(e.keyCode == "69")
	{
		if (e.repeat) return;
		E1.pause();
		E1.currentTime = 0;
		E1.play();
		document.querySelector("#E1").classList.add("czarny");
	}
	if(e.keyCode == "82")
	{
		if (e.repeat) return;
		F1.pause();
		F1.currentTime = 0;
		F1.play();
		document.querySelector("#F1").classList.add("czarny");
	}
	if(e.keyCode == "53")
	{
		if (e.repeat) return;
		F31.pause();
		F31.currentTime = 0;
		F31.play();
		document.querySelector("#F31").classList.add("bialy");
	}
	if(e.keyCode == "84")
	{
		if (e.repeat) return;
		G1.pause();
		G1.currentTime = 0;
		G1.play();
		document.querySelector("#G1").classList.add("czarny");
	}
	if(e.keyCode == "54")
	{
		if (e.repeat) return;
		G31.pause();
		G31.currentTime = 0;
		G31.play();
		document.querySelector("#G31").classList.add("bialy");
	}
	if(e.keyCode == "89")
	{
		if (e.repeat) return;
		A1.pause();
		A1.currentTime = 0;
		A1.play();
		document.querySelector("#A1").classList.add("czarny");
	}
	if(e.keyCode == "55")
	{
		if (e.repeat) return;
		A31.pause();
		A31.currentTime = 0;
		A31.play();
		document.querySelector("#A31").classList.add("bialy");
	}
	if(e.keyCode == "85")
	{
		if (e.repeat) return;
		B1.pause();
		B1.currentTime = 0;
		B1.play();
		document.querySelector("#B1").classList.add("czarny");
	}
	if(e.keyCode == "73")
	{
		if (e.repeat) return;
		C2.pause();
		C2.currentTime = 0;
		C2.play();
		document.querySelector("#C2").classList.add("czarny");
	}
	if(e.keyCode == "57")
	{
		if (e.repeat) return;
		C32.pause();
		C32.currentTime = 0;
		C32.play();
		document.querySelector("#C32").classList.add("bialy");
	}
	if(e.keyCode == "79")
	{
		if (e.repeat) return;
		D2.pause();
		D2.currentTime = 0;
		D2.play();
		document.querySelector("#D2").classList.add("czarny");
	}
	if(e.keyCode == "48")
	{
		if (e.repeat) return;
		D32.pause();
		D32.currentTime = 0;
		D32.play();
		document.querySelector("#D32").classList.add("bialy");
	}
	if(e.keyCode == "80")
	{
		if (e.repeat) return;
		E2.pause();
		E2.currentTime = 0;
		E2.play();
		document.querySelector("#E2").classList.add("czarny");
	}
	if(e.keyCode == "219")
	{
		if (e.repeat) return;
		F2.pause();
		F2.currentTime = 0;
		F2.play();
		document.querySelector("#F2").classList.add("czarny");
	}
	if(e.key == "=")
	{
		if (e.repeat) return;
		F32.pause();
		F32.currentTime = 0;
		F32.play();
		document.querySelector("#F32").classList.add("bialy");
	}
	if(e.keyCode == "221")
	{
		if (e.repeat) return;
		G2.pause();
		G2.currentTime = 0;
		G2.play();
		document.querySelector("#G2").classList.add("czarny");
	}
	if(e.key == "Backspace")
	{
		if (e.repeat) return;
		G32.pause();
		G32.currentTime = 0;
		G32.play();
		document.querySelector("#G32").classList.add("bialy");
	}
	if(e.keyCode == "220")
	{
		if (e.repeat) return;
		A2.pause();
		A2.currentTime = 0;
		A2.play();
		document.querySelector("#A2").classList.add("czarny");
	}
	if(e.keyCode == "")
	{
		if (e.repeat) return;
		A32.pause();
		A32.currentTime = 0;
		A32.play();
		document.querySelector("#A32").classList.add("bialy");
	}
	if(e.keyCode == "220")
	{
		if (e.repeat) return;
		B2.pause();
		B2.currentTime = 0;
		B2.play();
		document.querySelector("#B2").classList.add("kolor");
	}

})
document.addEventListener("keyup", (e) =>{
	var przycisk = document.querySelectorAll('*');
	przycisk.forEach((element) => {
  	element.classList.remove('czarny');
  	element.classList.remove('bialy');

	});
})

