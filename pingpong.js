//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let raioBolinha = tamBolinha/2;

//aqui estou configurando a velocidade da bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

//aqui estou configurando a raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

function setup(){
    createCanvas(600,400);
}
//area de desenho
function draw(){
    background(128,128,0); 
    //chamada das funçoes
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    movimentaBolinha();
    bolinhaBorda();
    criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    movimentaRaquete();
    colideRaquete();
}

function criaBolinha(xBolinha, yBolinha, tamBolinha) {
  //aqui criamos a bolinha e a pintamos de vermelho (adiçao do professor)
    fill ("red");
    circle (xBolinha,yBolinha,tamBolinha);
}

//função responsavel pela movimentaçao da bolinha
function movimentaBolinha() {
    
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}
///funçao responsavel pela bolinha nao sair fora do "campo/mesa"
function bolinhaBorda(){
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
}
//funcao responsavel por criar o retangulo que representa a maquete
function criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete) {
    fill("blue");
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
//funcao responsavel por movimentar a raquete
function movimentaRaquete() {

    if(keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }

}
//funcao responsavel por quanto a bolinha bater na raquete, retornar em direçao contraria
function colideRaquete(){

    if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){

        xvelocidadeBolinha *= -1;

    }

}
