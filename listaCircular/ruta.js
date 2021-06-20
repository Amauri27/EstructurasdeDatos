class Ruta{
  constructor(){
    this.Inicio=null;
  }
  
  Agregar(n){
    if (this.Inicio==null){
      this.Inicio=n;
      n.siguiente=this.Inicio;
      n.anterior=this.Inicio;
    }
    else{

      let ultimo=this.Inicio.anterior
      ultimo.siguiente=n;
      n.anterior=ultimo;
      n.siguiente=this.Inicio;
      this.Inicio.anterior=n;


      /*let t=this.Inicio
      if(t.anterior==this.Inicio)
      {
          t.anterior=n;
          t.siguiente=n;
          n.siguiente=this.Inicio;
          n.anterior=this.Inicio;
      }
      else
      {
      t.anterior.siguiente=n;
      n.anterior=t.anterior;
      t.anterior=n;
      n.siguiente=this.Inicio;
      }*/
    }
  }
  Imprimir(){
    if (this.Inicio==null){
      return false;
    }
    else{
      let t=this.Inicio;
      let r='';
      while(t.siguiente!=this.Inicio){
        r+=t.info();
        t=t.siguiente;
      }
      r+=t.info();
      r+=this.Inicio.info() + "etc...";
      return r;
    }
  }
 
Eliminar(nombre){
  
  if(this.Inicio!=null)
  {
      if(this.Inicio.Nombre==nombre)
      {
          let t=this.Inicio.anterior;
          t.siguiente.siguiente.anterior=t;
          t.siguiente=t.siguiente.siguiente;
          this.Inicio=t.siguiente;
          /*this.Inicio.siguiente.anterior=this.Inicio.anterior;
          this.Inicio.anterior.siguiente=this.Inicio.siguiente;
          this.Inicio=this.Inicio.siguiente;*/
          return true;
      }
      else
      {
          let t=this.Inicio;
          while(t.siguiente!=this.Inicio)
          {
              if(t.siguiente.Nombre==nombre)
              {
                  t.siguiente.siguiente.anterior=t;
                  t.siguiente=t.siguiente.siguiente;
                  return true;
              }
              else
              {
                  t=t.siguiente;
              }
          }
      }
      return false;
  }
}
Buscar(nombre){
    if(this.Inicio!=null)
    {
        let t=this.Inicio;
        if(t.Nombre==nombre)
        {
            return t;
        }
        while(t.siguiente!=this.Inicio)
        {
            t=t.siguiente;
            if(t.Nombre==nombre)
            {
                return t;
            }
        }
        return null;
    }
}
crearRecorrido(baseInicio,horaInicio,HoraFin)
{ 
  if(this.Inicio!=null)
  {
    let t=this.Inicio;
    while(t!=baseInicio)
    {
      t=t.siguiente;
    }
    if(t==baseInicio)
    {
      //let tiempo=0
      horaInicio=0;
      let bases="";
      while(horaInicio<HoraFin)
      {
      bases += t.info();
      horaInicio+=t.Minutos*60;
      t=t.siguiente;
      }
      return bases;
  }
  }
  return false;
}

}

let ruta= new Ruta();

