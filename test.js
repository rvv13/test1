/*
var butt1=document.getElementById("butt1");
	butt2=document.getElementById("butt2"),
	butt3=document.getElementById("butt3"),
	butt4=document.getElementById("butt4");




butt1.onclick=function run(){
	var div1=document.getElementById("div1"),
		div2=document.getElementById("div2"),
		div3=document.getElementById("div3");

	function changeToRed(){
		div1.className="red";
		div2.className="all";
		div3.className="all";
		}
	function changeToYel(){
		div1.className="red";
		div2.className="yel";
		div3.className="all";
	}

	function changeToGre(){
		div1.className="all";
		div2.className="all";
		div3.className="gre";
	}
	function worning(){
		div1.className="all";
		div2.className="all";
		div3.className="all";
	}

	changeToRed();	
		setTimeout(changeToYel,2000);
		setTimeout(changeToGre,3000);
		setTimeout(worning,4000);
		setTimeout(changeToGre,4200);
		setTimeout(worning,4400);
		setTimeout(changeToGre,4600);
		setTimeout(worning,4800);
		retur=setInterval(run,5000);
	}

*/




var
	div1=document.getElementById("div1"),
	div2=document.getElementById("div2"),
	div3=document.getElementById("div3");

var butt1=document.getElementById("butt1"),
	butt2=document.getElementById("butt2"),
	butt3=document.getElementById("butt3"),
	butt4=document.getElementById("butt4");

butt1.addEventListener("click", go);
butt2.addEventListener("click", changeToRed);
butt3.addEventListener("click", changeToYel);
butt4.addEventListener("click", changeToGre);





function changeToRed(){
	div1.className="red";
	div2.className="all";
	div3.className="all";

}
function changeToYel(){
	div1.className="all";
	div2.className="yel";
	div3.className="all";
}

function changeToGre(){
	div1.className="all";
	div2.className="all";
	div3.className="gre";
}


function go(){
	setInterval(function(){
		 var a=setTimeout(changeToRed,5);
		 var b=setTimeout(changeToYel, 2000);
		 var c=setTimeout(changeToGre, 3000)
	},6000);
}