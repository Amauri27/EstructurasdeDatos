class Base{
  constructor(Nombre,Minutos){
    this.Nombre=Nombre;
    this.Minutos=Minutos;
    this.siguiente=null;
    this.anterior=null;
  }
  info(){
    return `Nombre: ${this.Nombre}, Minutos: ${this.Minutos} <br> `
  }
}