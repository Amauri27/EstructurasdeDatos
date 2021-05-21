class Producto{
    constructor(Nombre,Cantidad,Precio,Id){
      this.Nombre=Nombre;
      this.Cantidad=Cantidad;
      this.Precio=Precio;
      this.Id=Id;
      this.siguiente=null;
      this.anterior=null;
    }
    info(){
      return `Nombre: ${this.Nombre} <br> Cantidad: ${this.Cantidad}<br> Precio: ${this.Precio} <br> Id: ${this.Id}<br><br>`
    }
  }