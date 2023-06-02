document.addEventListener('DOMContentLoaded', function () {
    const navicon = document.querySelector('.navicon');
    const navbarMenu = document.querySelector('.navbar-menu');
    const mainContainer=document.querySelector('hero-section');

    navicon.addEventListener('click', function () {
        this.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

});