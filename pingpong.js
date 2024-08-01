//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;

//config velocidade bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

  //aqui estou configurando a raquete
 let xRaquete = 5;
 let yRaquete = 150;
let larguraRaquete = 10;
  let alturaRaquete = 90;

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //função responsável pelo "desenho e animação da mesa"
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(128,128,0); 
    //chamando a função cria bolinha para criar a bolinha
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    //chamando a função mov bolinha
    moveBolinha();
    //chamando a borda
    Borda();
    criarRaquete (xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    movimentoRaquete();
    colideRaquete();
}

//função bolinha
function criaBolinha(xBolinha, yBolinha,tamBolinha){
    //aqui criamos a bolinha e a pintamos de vermelho (adição do professor)
    fill("red");
    circle (xBolinha,yBolinha,tamBolinha);
}

//função move bolinha
function moveBolinha(){
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}

function Borda(){
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
        
    }
}
//função responsável por criar o retângulo que representa a raquete
function criaRaqueta (xRaquete, yRaquete, larguraRaquete, alturaRaquete) {
fill("blue");
Reflect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
//funçaõ responsável por movimentar a raquete
function movimenteaRaquete() {
    if(keyIsDown(UP_ARROW) ){
        YrAQUETE -= 10;
    }
    if(KEYisDown(DOWN_ARROW) ){
        YrAQUETE +=  10;
    }

}
//função responsável por quando a bolinha bater na raquete, retornar em direção contrária.
function colideRaquete(){
    if(xBolinha - raiobolinha < xRaquete + larguraRaquete && yBolinha - < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){
        xvelocidadeBolinha *= -1;
    }
}
    
