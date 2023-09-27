function clicar () {
    const cor = document.getElementById('color').value;
    const titulo = document.getElementById('titulo');
    console.log(cor, titulo);
    titulo.style.color = cor;
}