/*Backgropund navegador*/
const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle("barra", this.window.scrollY > 0);
})
/*Codigo para icono de menu*/
let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

/*El codigo de busqueda de navegador */
document.querySelector('.btn-buscar').addEventListener('click', function () {
    const buscador = document.querySelector('.buscador');
    buscador.classList.toggle('active'); // Alterna la clase 'active'
});
