document.addEventListener('DOMContentLoaded', function() {
     const openBtns = document.querySelectorAll('.open-modal-btn');
     const closeBtn = document.querySelector('.close-modal-btn');
     const modal = document.querySelector('.modal');
     const modalForm = document.querySelector('.modal-form');
     const successBtn = document.querySelector('.success__btn');
     const successModal = document.querySelector('.modal__sucess');
     const overlay = document.querySelector('.overlay');
    
    openModal();
    document.addEventListener('keyup', (event) => {
      if(event.key === 'Escape') {
        closeModalBtn();
      }
    })
    document.addEventListener('click', (event) => {
      let target = event.target
      if (target.classList.contains('overlay')) {
        closeModalBtn();
      }
    })


    function openModal() {
      openBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.add("active");
            modal.style.display = 'block'
            modalForm.style.display = 'block';
            overlay.classList.add("active");
            document.body.style.overflow = "hidden";
            });
      })
        closeBtn.addEventListener("click", () => {
          closeModalBtn();
        });
        successBtn.addEventListener("click", () => {
          closeModalBtn();
        });
  }
    function closeModalBtn() {
      modal.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
      successModal.classList.remove('active');
      modal.style.display = 'none'
      successModal.style.display = 'none';
    }
});