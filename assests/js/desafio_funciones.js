document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    document.getElementById('#key').style.backgroundColor = "blue";
  } else if (event.key === 's') {
    document.getElementById('#key').style.backgroundColor = "orange";
  }
});


//
let value = prompt("Ingresa la clave: ")
let passwd = "Aprobado";

if (value === passwd) {
  document.write("Haz Aprobado");
} else if (value !== passwd) {
  document.write("Sige Intentando");
}