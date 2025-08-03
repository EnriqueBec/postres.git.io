const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const ingredientsList = document.getElementById('ingredients-list');

// Ingredientes por sabor
const ingredientesPorSabor = {
    limon: [
        'Leche condensada',
        'Galletas Marías',
        'Jugo de limón natural',
        'Lecherar'
    ],
    fresa: [
        'Leche condensada',
        'Galletas Marías',
        'Fresas naturales',
        'Mermelada de fresa'
    ],
    cafe: [
        'Leche condensada',
        'Galletas Marías',
        'Café de grano molido',
        'Licor de café (opcional)'
    ]
};

// Mostrar modal con ingredientes correspondientes
document.querySelectorAll('.btn.learn').forEach(button => {
    button.addEventListener('click', () => {
        const sabor = button.getAttribute('data-sabor');
        const ingredientes = ingredientesPorSabor[sabor];

        // Limpiar lista actual
        ingredientsList.innerHTML = '';

        // Agregar nuevos ingredientes
        ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = ingrediente;
            ingredientsList.appendChild(li);
        });

        modal.style.display = 'block';
    });
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
