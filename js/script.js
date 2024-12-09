/*Cambio de lados login*/
const contenedor = document.querySelector('.contenedor');
const btnregistro = document.querySelector('.btn-registro');
const btnlogin = document.querySelector('.btn-login');

btnregistro.addEventListener('click', () => {
    contenedor.classList.add('active');
});

btnlogin.addEventListener('click', () => {
    contenedor.classList.remove('active');
});
