function validation(form) {

    function createError(input, text) {
        const parent = input.parentNode;
        parent.classList.add('error')
        console.log(parent)
    }


    let result = true

    const allInputs = form.querySelector('input')

    for(const input of allInputs) {
        if(input.value == '') {
            console.log('ошибка поля')
            createError(input, 'Поле не заполнено!')
            result = false
        }
    }
    return result
}

document.querySelector('modal-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if(validation(this) == true) {

    }
})