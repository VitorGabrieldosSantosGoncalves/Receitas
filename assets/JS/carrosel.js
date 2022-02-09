const imagens = document.querySelectorAll('#sumiu');
const facebook = document.querySelectorAll('#facebook');
const instagram = document.querySelectorAll('#instagram');
const titulo = document.querySelectorAll('#titulo-saiba');
const textos = document.querySelectorAll('#texto');
var monica = document.querySelector('.monicaT');


function mostraDescricao() {
    imagens.forEach(imagens => {
        imagens.classList.add('sumiu')
    });
    titulo.forEach(titulo => {
        titulo.style.display = "block";
    })
    facebook.forEach(facebook => {
        facebook.style.display = "inline-block";
    })
    instagram.forEach(instagram => {
        instagram.style.display = "inline-block"
    })
    textos.forEach(textos => {
        textos.classList.add("arrumaTexto");
    });
    monica.classList.add('arrumaMonica');

}

function tiraDescricao() {
    imagens.forEach(imagens => {
        imagens.classList.remove('sumiu')
    });
    titulo.forEach(titulo => {
        titulo.style.display = "none";
    })
    facebook.forEach(facebook => {
        facebook.style.display = "none";
    })
    instagram.forEach(instagram => {
        instagram.style.display = "none"
    })
    textos.forEach(textos => {
        textos.classList.remove("arrumaTexto");
    });
    monica.classList.remove("arrumaMonica");
}

function tiraEcoloca() {
    setInterval(() => {
        mostraDescricao()
    }, 5000);
    setInterval(() => {
        tiraDescricao()
    }, 15000);
}
window.onload = () => {
    tiraEcoloca();
}