'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

function toggleModal() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}

/* for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  overlay.addEventListener('click', function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
});

btnCloseModal.addEventListener('click', function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
});
 */

// Toggle Modal
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', toggleModal);

overlay.addEventListener('click', toggleModal);
btnCloseModal.addEventListener('click', toggleModal);

// ESC key close
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleModal();
  }
});
