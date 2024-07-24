import "./styles/main.scss";

//Обсудить проект кнопка вверху рядом с хедером
document.addEventListener("DOMContentLoaded", () => {
  const openModalButton = document.getElementById("open-modal");
  const openModalButton1 = document.getElementById("open-modal1");
  const openModalButton2 = document.getElementById("open-modal2");
  const openModalButton3 = document.getElementById("open-modal3");
  const closeModalButton = document.getElementById("close-modal");
  const modal = document.getElementById("modal");

  // Функция для открытия модального окна
  const openModal = () => {
    modal.classList.add("active");
  };
  // Функция для закрытия модального окна
  const closeModal = () => {
    modal.classList.remove("active");
  };
  // Открытие модального окна при клике на кнопку
  openModalButton.addEventListener("click", openModal);
  openModalButton1.addEventListener("click", openModal);
  openModalButton2.addEventListener("click", openModal);
  openModalButton3.addEventListener("click", openModal);

  // Закрытие модального окна при клике на кнопку закрытия
  closeModalButton.addEventListener("click", closeModal);
});

//Бургер меню
document.addEventListener("DOMContentLoaded", () => {
  const openBurgerButton = document.getElementById("open-burger");
  const closeBurgerButton = document.getElementById("close-burger");

  // Функция для открытия модального окна
  const openModal = () => {
    burger.classList.add("active");
  };
  // Функция для закрытия модального окна
  const closeModal = () => {
    burger.classList.remove("active");
  };
  // Открытие модального окна при клике на кнопку
  openBurgerButton.addEventListener("click", openModal);

  // Закрытие модального окна при клике на кнопку закрытия
  closeBurgerButton.addEventListener("click", closeModal);
});
