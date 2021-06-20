class Producto
{
    constructor(Nombre,Id,Costo,Cantidad)
    {
        this.Nombre=Nombre;
        this.Id=Id;
        this.Costo=Costo;
        this.Cantidad=Cantidad;
        this.hijoDerecho=null;
        this.hijoIzquierdo=null;
    }
    info()
    {
        return `Nombre: ${this.Nombre} ID: ${this.Id} Costo: ${this.Costo} Cantidad: ${this.Cantidad}`;
    }
}

class arbolBinario
{
    constructor()
    {
        this.raiz=null;
    }

    Agregar(n)
    {
        if(this.raiz==null)
        {
            this.raiz=n;
        }
        else
        {
            this.Agregate(n,this.raiz);
        }
    }
    Agregate(nuevo,nodoX)
    {
        if(nuevo.Id<nodoX.Id)
        {
            if(nodoX.hijoIzquierdo==null)
            {
                nodoX.hijoIzquierdo=nuevo;
            }
            else
            {
                this.Agregate(nuevo,nodoX.hijoIzquierdo);
            }
        }
        else
        {
            if(nodoX.hijoDerecho==null)
            {
                nodoX.hijoDerecho=nuevo;
            }
            else
            {
                this.Agregate(nuevo,nodoX.hijoDerecho);
            }
        }
    }
    InOrder()
    {
        if(this.raiz==null)
        {
            console.log("");
        }
        else
        {
            this.InorderRec(this.raiz);
        }
    }
    InorderRec(nodoX)
    {
        if(nodoX.hijoIzquierdo!=null)
        {
            this.InorderRec(nodoX.hijoIzquierdo);
        }
        console.log(nodoX);
        if(nodoX.hijoDerecho!=null)
        {
            this.InorderRec(nodoX.hijoDerecho);
        }
    }
    PreOrder()
    {
        if(this.raiz==null)
        {
            console.log("");
        }
        else
        {
            this.PreorderRec(this.raiz);
        }
    }
    PreorderRec(nodoX)
    {
        console.log(nodoX);
        if(nodoX.hijoIzquierdo!=null)
        {
            this.PreorderRec(nodoX.hijoIzquierdo);
        }
        if(nodoX.hijoDerecho!=null)
        {
            this.PreorderRec(nodoX.hijoDerecho);
        }
    }
    PosOrder()
    {
        if(this.raiz==null)
        {
            console.log("");
        }
        else
        {
            this.PosorderRec(this.raiz);
        }
    }
    PosorderRec(nodoX)
    {
        if(nodoX.hijoIzquierdo!=null)
        {
            this.PosorderRec(nodoX.hijoIzquierdo);
        }
        if(nodoX.hijoDerecho!=null)
        {
            this.PosorderRec(nodoX.hijoDerecho);
        }
        console.log(nodoX);
    }

}

let inventario = new arbolBinario();

let a = new Producto("a",50,50,50);
let b = new Producto("b",40,40,40);
let c = new Producto("c",60,60,60);
let d = new Producto("d",30,30,30);
let e = new Producto("e",47,47,47);
let f = new Producto("f",58,58,58);
let g = new Producto("g",67,67,67);
let h = new Producto("h",63,63,63);
let i = new Producto("i",69,69,69);
let j = new Producto("j",20,20,20);
let k = new Producto("k",35,35,35);

inventario.Agregar(a);
inventario.Agregar(b);
inventario.Agregar(c);
inventario.Agregar(d);
inventario.Agregar(e);
inventario.Agregar(f);
inventario.Agregar(g);
inventario.Agregar(h);
inventario.Agregar(i);
inventario.Agregar(j);
inventario.Agregar(k);

const chalk = require('chalk');

const log = console.log;

log(chalk.green(inventario.InOrder()));

log(chalk.magenta(inventario.PreOrder()));

log(chalk.blue(inventario.PosOrder()));


