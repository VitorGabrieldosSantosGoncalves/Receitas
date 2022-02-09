var botao = document.getElementById('botao-menu');
var navegacao = document.getElementById('navegacao');
var botaoMini = document.getElementById('botao-menu-mini');

function ativaMenu() {
    navegacao.style.display = 'block';
}

function trocaBotaoMini() {
    botao.style.display = 'none';
    botaoMini.style.display = 'block';
}

function fechaMenu() {
    navegacao.style.display = 'none';
}

function trocaBotaoDash() {
    botao.style.display = 'block';
    botaoMini.style.display = 'none';
    botao.classList.add('botao-menu-after');
}
botao.addEventListener('click', function() {
    ativaMenu();
    trocaBotaoMini();
})

botaoMini.addEventListener('mousedown', function() {
    fechaMenu();
    trocaBotaoDash();
})