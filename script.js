let contador = 0;
const elMensagem = document.getElementById('mensagem');
const btnClique = document.getElementById('btnClique');
const btnReset = document.getElementById('btnReset');
const divContador = document.getElementById('contador');

btnClique.addEventListener('click', function(evento) {
    evento.preventDefault();
    contador++;
    elMensagem.textContent = '🎯 Você clicou no link! 🎉';
    divContador.textContent = '👆 Cliques: ' + contador;
});

btnReset.addEventListener('click', function() {
    contador = 0;
    elMensagem.textContent = '📌 Puro exercício inicial de front-end';
    divContador.textContent = '👆 Cliques: 0';
});