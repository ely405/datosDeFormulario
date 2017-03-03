function imprime(){
  var nombre = document.getElementById("name").value;
  var correo = document.getElementById("email").value;
  if(nombre.length == "" || correo.length == ""){
  }else{
    document.getElementById("mostrarNombre").innerHTML = nombre;
    document.getElementById("mostrarMail").innerHTML = correo;
  }
}
