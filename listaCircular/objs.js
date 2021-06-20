function Agregar(){

    let Nombre,Minutos;
    
    Nombre=document.getElementById("nombre").value;
    Minutos=document.getElementById("minutos").value;
    
    let minutos = parseFloat(Minutos);
    
    let pro=new Base(Nombre,minutos);
    
    ruta.Agregar(pro);
    
    document.getElementById("nombre").value="";
    document.getElementById("minutos").value="";
    }
    
    function Listar(){
    
        document.getElementById("lista").value="";
    
        let res=ruta.Imprimir();
    
        document.getElementById("lista").innerHTML=res;
    
    }
    
    function Eliminar(){
      let res="";
      let id=document.getElementById("textoabuscar").value;
      res=ruta.Eliminar(id);
      if (res==false) {
          document.getElementById("resultado").innerHTML="No se encontró nada";
      }else{
          document.getElementById("resultado").innerHTML="Se eliminó correctamente";
    
    }
    }
    
    function Buscar(){
      let res="";
      let ID=document.getElementById("textoabuscar").value;
      res=ruta.Buscar(ID);
      if (res==null) {
          document.getElementById("resultado").innerHTML="No se encontró nada";
      }else{
          document.getElementById("resultado").innerHTML="Se encontró <br>"+res.info();
      }
    }
  
    function Recorrido(){
      var res=null;
      let ID=document.getElementById("baseinicio").value;
      res=ruta.Buscar(ID);
      if (res==null) {
          document.getElementById("resultado").innerHTML="No se encontró nada";
      }else{
          horainicio2=document.getElementById("horainicio").value;
          horafin2=document.getElementById("horafin").value;
          horainicio1=parseFloat(horainicio2);
          horafin1=parseFloat(horafin2);
          if(horafin1<horainicio1)
          {
            
            let horafin3 = 24-(horainicio1-horafin1);
            //let horainicio3=0;
            horafin3*=60*60;
  
            rep = ruta.crearRecorrido(res,horainicio1,horafin3);
  
          }else
          {
            //let horainicio3=0;
            let horafin3 = horafin1-horainicio1;
            horafin3 *=60*60;
            rep=ruta.crearRecorrido(res,horainicio1,horafin3);
          }
          
  
          document.getElementById("tarjeta").innerHTML=rep;
      }
    }
  