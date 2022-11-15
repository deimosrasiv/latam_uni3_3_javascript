const ele1 = document.querySelector("#ele1");
const ele2 = document.querySelector("#ele2");

//function pintar(){
//ele = document.getElementById("ele1")
//ele.style.backgroundColor = 'yellow'
//}

//ele = document.getElementById("ele1")
//ele.addEventListener("click", pintar);

// 3.1
function pintar(evento) {
    const elemento = evento.target;
    elemento.style.backgroundColor = "yellow";
}

ele1.addEventListener("click", pintar);

//3.2
ele2.style.backgroundColor = "green";

function pintar2(evento, color) {
    const elemento = evento.target;
    elemento.style.backgroundColor = color;
}

ele2.addEventListener("click", function (event) {
    pintar2(event, "yellow");
});

ele2.addEventListener("click", () => (event, "yellow"));
