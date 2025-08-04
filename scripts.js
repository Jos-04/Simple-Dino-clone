const dino = document.getElementById("dino");
const cacto =document.getElementById("cacto");

function pulo(){
    if(dino.classList!="pulo"){
        dino.classList.add("pulo");
        
        // Remove a classe pulo após a animação
        setTimeout(function(){
            dino.classList.remove("pulo");
        }, 400)
    }
}

//Detectção de hit
let estado = setInterval(function(){
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactoleft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));

    if(cactoleft<50 && cactoleft>0 && dinotop>120){
        alert("Perdeu");

        //Cancela a animação e o display do cacto
        cacto.style.animation = "none";
        cacto.style.display = "none";
    }
}, 10)

document.addEventListener("keydown", function (event) {
  if(event.code === "ArrowUp" || event.code === "Space"){
    pulo();
  }
});