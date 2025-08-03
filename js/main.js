const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');


menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


function focusSection(sectionId) {
    const section = document.querySelector(`.${sectionId}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        menu.classList.remove('active');
    }
}

function ordenarPorWhatsApp(sabor) {
    const numero = '5217774085481'; // tu número
    const mensaje = `Hola, quiero hacer un pedido de Carlota de ${sabor.charAt(0).toUpperCase() + sabor.slice(1)}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}