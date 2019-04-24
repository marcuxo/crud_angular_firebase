import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';

@Component({
  selector: 'app-lista-agregar',
  templateUrl: './lista-agregar.component.html',
  styleUrls: ['./lista-agregar.component.css']
})
export class ListaAgregarComponent implements OnInit {

  item:any = {
    name:'nombre'
  }
  constructor(private servicio:ConexionService) { }

  ngOnInit() {
  }
  agregar(){
    var conf1 = confirm("Estas seguro de ingresar este item")
    if(conf1){
      this.servicio.agregarItem(this.item);
      this.item.nombre='';
    } else {
      alert("revisa los datos")
    }
    
  }

}
