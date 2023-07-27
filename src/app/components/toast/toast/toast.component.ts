import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastService } from 'src/app/service/toast/toast.service';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  providers: [MessageService],
})
export class ToastComponent {
  constructor(
    private messageService: MessageService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.toastService.setToastComponent(this);
  }
  showMessage(severity: string, summary: string, detail: string): void {
    this.messageService.add({ severity, summary, detail });
  }
}
