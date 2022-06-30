// modale utilisateur
let modalAjout = document.getElementById("modalAjout");

let mybtn = document.getElementById("mybtn");
let  closeup = document.getElementsByClassName("fermer")[0];
mybtn.onclick = function() {
  modalAjout.style.display = "flex";
}
closeup.onclick = function() {
  modalAjout.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalAjout) {
    modalAjout.style.display = "none";
  }
} 
