const modal = document.getElementById("modal");
const logo = document.getElementById("logo");
const image_modal = document.getElementById("imageModal");
const cerrar = document.querySelector(".cerrar");
// cuando hacen click en la imagen
logo.onclick = function () {
  modal.style.display = "block";
  image_modal.src = this.src;
};

// cuando hace click en cerrar oculta el modal

cerrar.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
