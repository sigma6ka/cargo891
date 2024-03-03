function dropdown () {
    let dropdown = document.querySelector('.box-process__for'),
    list = document.querySelector('.box-process__items'),
    arrow = document.querySelector('.box-process__img');
    
    dropdown.addEventListener('click', () => {
            list.classList.toggle('active');
    })
}

dropdown()