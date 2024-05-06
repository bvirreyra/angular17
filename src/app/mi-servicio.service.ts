import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  public miSignal= signal<number>(45);

  constructor() { }
}
