const modalForm = document.querySelector('.modal-form'),
feedbackForm = document.querySelector('.feedback-form'),
successModal = document.querySelector('.modal__sucess'),
modal = document.querySelector('.modal');

function validation() {
    modalForm.addEventListener('submit',(event) => {
    event.preventDefault();
    const modalInputs = document.querySelectorAll('.modal-form__input');
    modalInputs.forEach(input => {
        if(input.value === '') {
            input.classList.add('warn');
        } else {
            successModal.classList.add('active');
            modalForm.style.display = 'none';
            successModal.style.display = 'block';
        }
    })
})

feedbackForm.addEventListener('submit',(event) => {
    event.preventDefault();
    const feedbackInputs = document.querySelectorAll('.feedback-form__input');
    feedbackInputs.forEach(input => {
        if(input.value === '') {
            input.classList.add('warn');
        }
    })
})
}

const phoneMask = document.querySelector('.modal-phone');
IMask(
    phoneMask,
    {mask : '+{7} (000) 000-00-00'}
);

validation();