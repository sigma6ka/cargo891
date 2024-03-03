document.addEventListener('DOMContentLoaded', function() {
    const openBtns = document.querySelectorAll('.open-modal-btn');
    const closeBtn = document.querySelector('.close-modal-btn');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    
    function openModal() {
        openBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
              e.preventDefault();
              modal.classList.add("active");
              overlay.classList.add("active");
              document.body.style.overflow = "hidden";
              });
        })
          closeBtn.addEventListener("click", () => {
            closeModalBtn();
          });
    }
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



    function closeModalBtn() {
      modal.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
});