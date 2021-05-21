     class Inventario{
      constructor(){
        this.Inicio=null;
      }
      
      Agregar(n){
        if (this.Inicio==null){
          this.Inicio=n;
        }
        else{
            let t=this.Inicio;
            if (n.Id<t.Id){
                n.siguiente=t
                t.anterior=n
                this.Inicio=n
            }
            else{
              let t = this.Inicio
             while(t.Id < n.Id && t.siguiente!=null){
                  t=t.siguiente;
                }
              if (n.Id<t.Id){
                  n.siguiente=t;
                  n.anterior=t.anterior;
                  t.anterior.siguiente=n;
                  t.anterior=n;
              }
              else{
                  t.siguiente=n
                  n.anterior=t
              }
            } 
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
        this.Inicio.siguiente.anterior=null
        this.Inicio=this.Inicio.siguiente;
      }
      else{
        let t=this.Inicio;
        while(t.siguiente!=null && ID>t.siguiente.Id){
            t=t.siguiente;
          }
          if (t.siguiente.Id==ID){
            if(t.siguiente.siguiente==null){
              t.siguiente=null
            }
            else{
            t.siguiente.siguiente.anterior=t
            t.siguiente=t.siguiente.siguiente;
            return true;
          }
        }
      }
    }
  }
    Buscar(ID){
      if(this.Inicio!=null){
      let t=this.Inicio;
      if (t.Id===ID) {
          return t;  
        }
      while(t.siguiente!=null && ID>t.Id){
      t=t.siguiente;
      if (t.Id===ID) {
        return t;  
      }
      }
      return null;
  }      
}
    }