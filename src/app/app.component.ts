import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import LoginComponent from './login/login.component';
import ModificadorComponent from "./modificador/modificador.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        LoginComponent,
        ModificadorComponent
    ]
})
export class AppComponent {
  title = 'signals';
}
