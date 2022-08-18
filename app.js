const wrap = document.querySelector(".wrap");
const html = document.querySelector("html");

const closebtns = document.getElementsByClassName("modal-close");

for (let closebtn of closebtns) {
  closebtn.addEventListener("click", closeModalWindow);
}

const cards = document.getElementsByClassName("card");

for (let card of cards) {
  card.addEventListener("click", (event) => showModalWindow(event));
}

const modals = document.getElementsByClassName("modal-wrap");

function showModalWindow(event) {
  let cardId = event.currentTarget.id;
  wrap.classList.add("blured");
  html.classList.add("overflow-y");
  for (const modal of modals)
    if (modal.dataset.cardId === cardId) modal.classList.remove("hidden");
}

function closeModalWindow() {
  for (let modal of modals) {
    modal.classList.add("hidden");
  }
  wrap.classList.remove("blured");
  html.classList.remove("overflow-y");
}

function initSlider() {
  const cardsContainer = document.querySelector(".cards");
  const slider = document.querySelector(".slider-input");
  slider.setAttribute('max', cards.length * 100);
  slider.addEventListener("input", e => {
      cardsContainer.style.right = e.target.value + 'px';
  });
}
initSlider();
