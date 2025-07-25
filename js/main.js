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