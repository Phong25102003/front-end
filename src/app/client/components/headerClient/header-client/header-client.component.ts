import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { LocalStrService } from 'src/app/service/localStr/local-str.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.css'],
})
export class HeaderClientComponent {
  user: any = '';
  private localStorageSubscription: Subscription;

  constructor(private localStorageService: LocalStrService) {
    this.localStorageSubscription = this.localStorageService
      .getLocalStorageChanges()
      .subscribe((key) => {
        if (key === 'user') {
          this.user = JSON.parse(localStorage.getItem('user') || '');
        }
      });
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '');
  }

  ngOnDestroy(): void {
    this.localStorageSubscription.unsubscribe();
  }

  logout(): void {
    localStorage.clear();
    this.user = '';
  }
}
