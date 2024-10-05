const comprarBtns = document.querySelectorAll('.comprar-btn');

const modal = document.getElementById('modal-cita');
const closeModal = document.querySelector('.close');
const formCita = document.getElementById('form-cita');


comprarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';  
    });
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; 
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';  
    }
});


formCita.addEventListener('submit', (event) => {
    event.preventDefault();  
    const nombreCliente = document.getElementById('nombre-cliente').value;
    const fechaCita = document.getElementById('fecha-cita').value;

    alert(`Cita agendada para ${nombreCliente} el ${fechaCita}.`);
    modal.style.display = 'none';  
    formCita.reset(); 
});
