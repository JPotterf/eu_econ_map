//const map = document.getElementsByClassName("map");
const test = document.getElementById("test");
const modal = document.getElementById("modal-map-info");
const backdrop = document.getElementById("backdrop");
const map = document.getElementsByClassName("map");
const Albania = document.getElementById("AL");
//open modal
test.addEventListener("click", function() {
  modal.style.display = "block";
  backdrop.style.display = "block";
});
//close modal
backdrop.addEventListener("click", function() {
  modal.style.display = "none";
  backdrop.style.display = "none";
});

