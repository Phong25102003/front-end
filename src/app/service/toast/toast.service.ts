import { Injectable } from '@angular/core';
import { ToastComponent } from 'src/app/components/toast/toast/toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastComponent: ToastComponent | undefined;

  setToastComponent(component: ToastComponent): void {
    this.toastComponent = component;
  }

  showMessage(severity: string, summary: string, detail: string): void {
    if (this.toastComponent) {
      this.toastComponent.showMessage(severity, summary, detail);
    }
  }
}
