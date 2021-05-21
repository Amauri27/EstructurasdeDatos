let Tienda= new Inventario;
           
        
function Agregar(){

let ID,Nombre,Precio,Cantidad;

Nombre=document.getElementById("nombre").value;
Cantidad=document.getElementById("cantidad").value;
Precio=document.getElementById("precio").value;
ID=document.getElementById("id").value;

let Id = parseFloat(ID);

let pro=new Producto(Nombre,Cantidad,Precio,Id);

Tienda.Agregar(pro);

document.getElementById("nombre").value="";
document.getElementById("cantidad").value="";
document.getElementById("precio").value="";
document.getElementById("id").value="";
  
}

function Listar(){

    document.getElementById("lista").value="";

    let res=Tienda.Listar();

    document.getElementById("lista").innerHTML=res;

}

function Eliminar(){
  let res="";
  let id=document.getElementById("textoabuscar").value;
  let Id = parseFloat(id);
  res=Tienda.Eliminar(Id);
  if (res==false) {
      document.getElementById("resultado").innerHTML="No se encontró nada";
  }else{
      document.getElementById("resultado").innerHTML="Se eliminó correctamente";

}
}

function Buscar(){
  let res="";
  let ID=document.getElementById("textoabuscar").value;
  let Id = parseFloat(ID);
  res=Tienda.Buscar(Id);
  if (res==null) {
      document.getElementById("resultado").innerHTML="No se encontró nada";
  }else{
      document.getElementById("resultado").innerHTML="Se encontró <br>"+res.info();
  }
}
    

    