import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'app-modificador',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './modificador.component.html',
  styleUrl: './modificador.component.css'
})
export default class ModificadorComponent implements OnInit{
  public modifica= inject(MiServicioService)
constructor() { }
ngOnInit(): void {

    // this.modifica.miSignal.set(90);
  }

modificar(){
  const r=prompt("Ingrese el valor a modificar");
  this.modifica.miSignal.set(Number(r));
}
}
