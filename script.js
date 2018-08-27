let vh = window.innerHeight;

document.getElementById('value').innerHTML = vh;

window.addEventListener("resize", function() {
  let vh = window.innerHeight;
  document.getElementById('value').innerHTML = vh;
})
