const imagens = [

"imagens/foto1.jpg",
"imagens/foto2.jpg",
"imagens/foto3.jpg",
"imagens/foto4.jpg"

];

let atual=0;

setInterval(()=>{

atual++;

if(atual>=imagens.length){

atual=0;

}

document.getElementById("slide").src=imagens[atual];

},5000);
