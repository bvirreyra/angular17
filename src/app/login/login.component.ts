import { Component, inject, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit {
  public servicio= inject(MiServicioService)
constructor() { } 
ngOnInit(): void {
  this.servicio.miSignal();
  }
}
