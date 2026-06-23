const quarta = [

"13H50 - Futebol de Areia",
"13H50 - Queimada",
"14H10 - Queimada",
"14H30 - Futebol de Areia",
"15H00 - Futebol de Campo",
"15H00 - Futsal"

];

quarta.forEach(jogo=>{

document.getElementById("quarta").innerHTML +=
`<div class="card-jogo">${jogo}</div>`;

});

const quinta = [

"07H30 - Atletismo",
"13H40 - Queimada",
"14H10 - Queimada",
"14H30 - Futebol de Areia",
"15H00 - Futsal",
"15H10 - Futebol de Areia"

];

quinta.forEach(jogo=>{

document.getElementById("quinta").innerHTML +=
`<div class="card-jogo">${jogo}</div>`;

});

const sexta = [

"08H20 - Futsal",
"08H40 - Queimada",
"09H00 - Queimada",
"09H10 - Queimada",
"13H00 - Futsal",
"13H30 - Futebol de Areia"

];

sexta.forEach(jogo=>{

document.getElementById("sexta").innerHTML +=
`<div class="card-jogo">${jogo}</div>`;

});
