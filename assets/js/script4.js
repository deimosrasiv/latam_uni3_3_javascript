const bc01 = document.querySelector("#bc-01");
const bc02 = document.querySelector("#bc-02");
const bc03 = document.querySelector("#bc-03");
const bc04 = document.querySelector("#bc-04");
let colorselect = "white";

document.addEventListener("keydown", function (event) {
	if (event.key === "a") {
		colorselect = "black";
		document.getElementById("msgText").innerHTML =
			"Usted presiono la tecla A , de color Negro";
		document.getElementById("msgText").style.color = "black";
		console.log("cambia color 01 " + colorselect);
		return;
	}

	if (event.key === "s") {
		colorselect = "yellow";
		document.getElementById("msgText").innerHTML =
			"Usted presiono la tecla S , de color Amarillo";
		document.getElementById("msgText").style.color = "yellow";
		console.log("cambia color 02 " + colorselect);
		return;
	}

	if (event.key === "d") {
		colorselect = "red";
		document.getElementById("msgText").innerHTML =
			"Usted presiono la tecla D , de color Rojo";
		document.getElementById("msgText").style.color = "red";
		console.log("cambia color 03 " + colorselect);
		return;
	}
});

function changeColor(evento) {
	const casilla = evento.target;
	casilla.style.backgroundColor = colorselect;
}

bc01.addEventListener("click", changeColor);

bc02.addEventListener("click", changeColor);

bc03.addEventListener("click", changeColor);

bc04.addEventListener("click", changeColor);
