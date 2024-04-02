// Quando a imagem de coração é clicado muda de vazio para cheio e vice versa
function funcFavorito() {
    let favorito = document.getElementById('favorito');
    if(favorito.src.match('FavoritoVazio')) {
        favorito.src = './Assets/FavoritoCheio.png';
    } else {
        favorito.src = './Assets/FavoritoVazio.png';
    }
}