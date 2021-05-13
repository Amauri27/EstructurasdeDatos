class Producto{
    constructor(Nombre,Cantidad,Precio,Id){
      this.Nombre=Nombre;
      this.Cantidad=Cantidad;
      this.Precio=Precio;
      this.Id=Id;
      this.siguiente=null;
    }
    info(){
      return `Nombre: ${this.Nombre} <br> Cantidad: ${this.Cantidad}<br> Precio: ${this.Precio} <br> Id: ${this.Id}<br><br>`
    }
  }
    
    class Inventario{
      constructor(){
        this.Inicio=null;
      }
      
      Agregar(nuevo){
        if (this.Inicio==null){
          this.Inicio=nuevo;
        }
        else{
          let t=this.Inicio
          while(t.siguiente!=null){
            t=t.siguiente;
          }
          t.siguiente=nuevo;
        }
      
      }
      
      Listar(){
        if (this.Inicio==null){
          return false;
        }
        else{
          let t=this.Inicio;
          let r='';
          while(t!=null){
            r+=t.info();
            t=t.siguiente;
          }
          return r;
        }
      }
     
    Eliminar(ID){
      
      if(this.Inicio!=null){
        if(this.Inicio.Id==ID){
          this.Inicio=this.Inicio.siguiente;
        }
        else{
          let t=this.Inicio;
          while(t.siguiente!=null){
            if (t.siguiente.Id==ID){
              t.siguiente=t.siguiente.siguiente;
              return true;
            }
            else{
              t=t.siguiente;
            } 
          }
          return false;
        }
      }
    }
    Buscar(ID){
      if(this.Inicio!=null){
      let t=this.Inicio;
      if (t.Id===ID) {
          return t;  
        }
      while(t.siguiente!=null){
      t=t.siguiente;
      if (t.Id===ID) {
        return t;  
      }
      }
      return null;
  }      
}
    }
    
     let Tienda= new Inventario;
      
    //   let a= new Producto("x",1,1,1);
    //   let b= new Producto("y",2,2,2);
    //   let c= new Producto("z",3,3,3);
    //   let d= new Producto("w",4,4,4);
      
      
    //  Tienda.Agregar(a);
    //  Tienda.Agregar(b);
    //  Tienda.Agregar(c);
    //  Tienda.Agregar(d);
        
        
        
function Agregar(){

let ID,Nombre,Precio,Cantidad;

Nombre=document.getElementById("nombre").value;
Cantidad=document.getElementById("cantidad").value;
Precio=document.getElementById("precio").value;
ID=document.getElementById("id").value;

let pro=new Producto(Nombre,Cantidad,Precio,ID);

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
  res=Tienda.Eliminar(id);
  if (res==false) {
      document.getElementById("resultado").innerHTML="No se encontró nada";
  }else{
      document.getElementById("resultado").innerHTML="Se eliminó correctamente";

}
}

function Buscar(){
  let res="";
  let ID=document.getElementById("textoabuscar").value;
  res=Tienda.Buscar(ID);
  if (res==null) {
      document.getElementById("resultado").innerHTML="No se encontró nada";
  }else{
      document.getElementById("resultado").innerHTML="Se encontró <br>"+res.info();
  }
}
    

    
    