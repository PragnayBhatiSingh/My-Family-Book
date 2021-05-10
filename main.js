var i = 0;

var imgs = [
  "transparent-dad-clipart.jpg",
  "OIP (2).jpeg",
  "boy.jpg",
  "OIP (1).jpeg"
];
var names = [
  "Dad",
  "Mom",
  "Brother",
  "Sister"
];

function nextslide() {
  document.getElementById("family-images").src = imgs[i];
  document.getElementById("name").innerHTML = names[i];
  
  i++

}