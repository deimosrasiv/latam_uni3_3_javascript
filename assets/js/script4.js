const bc01 = document.getElementById("bc-01");
const bc02 = document.getElementById("bc-02");
const bc03 = document.getElementById("bc-03");
const bc04 = document.getElementById("bc-04");

document.addEventListener("keydown", function (event) {
	if (event.key === "a" || event.key === "A") {
		colorselect = "black";
		colorselectext = "white";
		colorText = "Negro";
		document.getElementById("msgText").innerHTML =
			"Usted presiono la tecla A , de color Negro";
		document.getElementById("msgText").style.color = "black";

		console.log("cambia color 01 " + colorselect);
		return;
	}

	if (event.key === "s" || event.key === "S") {
		colorselect = "yellow";
		colorselectext = "black";
		colorText = "Amarillo";
		document.getElementById("msgText").innerHTML =
			"Usted presiono la tecla S , de color Amarillo";
		document.getElementById("msgText").style.color = "yellow";

		console.log("cambia color 02 " + colorselect);
		return;
	}

	if (event.key === "d" || event.key === "D") {
		colorselect = "red";
		colorselectext = "white";
		colorText = "Rojo";
		document.getElementById("msgText").innerHTML =
			"Usted presiono la tecla D , de color Rojo";
		document.getElementById("msgText").style.color = "red";

		console.log("cambia color 03 " + colorselect);
		return;
	}
});

function changeColor(evento) {
	const casilla = evento.target;
	casilla.style.background = colorselect;
	casilla.style.color = colorselectext;
	casilla.innerHTML = colorText;
}

bc01.addEventListener("click", changeColor);

bc02.addEventListener("click", changeColor);

bc03.addEventListener("click", changeColor);

bc04.addEventListener("click", changeColor);
