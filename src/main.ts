import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ConnectDemoComponent } from './connect-demo/connect-demo.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ConnectDemoComponent],
  template: `
    <h1>Hello from MiniRx Signal Store!</h1>
    <connect-demo/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
