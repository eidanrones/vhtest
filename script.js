let vh = window.innerHeight;

document.getElementById('value').innerHTML = vh;

window.addEventListener("resize", function() {
  let vh = window.innerHeight;
  document.getElementById('value').innerHTML = vh;
})

//var style = getComputedStyle(document.body);
//console.log(style.getPropertyValue('--realvh'));
//style.setProperty('--realvh', vh);
