const dino = document.getElementById("dino");
const cactosTipo = ['cacto0', 'cacto1', 'cacto2'];

let vivo = true;
let cacto;

document.addEventListener("keydown", function (event) {
    if(event.code === "ArrowUp" || event.code === "Space"){
            if(vivo){
                pulo();
            }else{
                reiniciar();
            }
        }
    });

function escolhaCacto(){
        //sorteia um tipo de cacto para ser gerado
        let cactoId = Math.floor(Math.random()*cactosTipo.length);
        let cactoEscolhido = cactosTipo[cactoId];
        cacto = document.getElementById(`${cactoEscolhido}`);
        cacto.style.backgroundImage = `url('${cactoEscolhido}.png')`;

        cacto.classList.remove("cacto");
        void cacto.offsetHeight;
        cacto.classList.add("cacto"); 

        detecção_de_hit(cacto);

        //Serve para chamar a função novamente após 1 segundo, que é o que dura a animação
        setTimeout(function(){
            if(vivo){
                cacto.style.backgroundImage = "none";
                escolhaCacto();
            }
        
        }, 1000);
    }
function pulo(){
    if(dino.classList!="pulo" && vivo){
        dino.classList.add("pulo");
           
        // Remove a classe pulo após a animação
        setTimeout(function(){
            dino.classList.remove("pulo");
        }, 400)
    }
}

function reiniciar(){
    dino.style.backgroundImage = 'url("dino0.png")';
    vivo = true;
    cacto.style.backgroundImage = "none";
    cacto.style.animationPlayState = "running";
    escolhaCacto();
}

function detecção_de_hit(cacto){
    let estado = setInterval(function(){
        let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactoleft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));
        
        if(cactoleft<50 && cactoleft>0 && dinotop>120){
            vivo = false;
            dino.style.backgroundImage = 'url("dino-dead0.png")';
            cacto.style.animationPlayState = "paused";
            clearInterval(estado);
        }
    }, 10);
}

//Inicia o Jogo
escolhaCacto();