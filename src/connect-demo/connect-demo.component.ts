import { CommonModule } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';
import { ComponentStore, createComponentStore } from '@mini-rx/signal-store';
import { timer } from 'rxjs';

interface State {
  counterFromRxJS: number;
  counterFromSignal: number;
}

@Component({
  imports: [CommonModule],
  selector: 'connect-demo',
  templateUrl: './connect-demo.component.html',
  standalone: true,
})
export class ConnectDemoComponent {
  cs: ComponentStore<State> = createComponentStore<State>({
    counterFromRxJS: 0,
    counterFromSignal: 0,
  });

  constructor() {
    const signalCounter = signal(0);
    const interval = 1000;

    // Connect external sources (RxJS or Signals) to the Component Store
    this.cs.connect({
      counterFromRxJS: timer(0, interval), // RxJS
      counterFromSignal: signalCounter, // Signal
    });

    setInterval(() => signalCounter.update((v) => v + 1), interval);
  }
}
