import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth/auth.service';
import { LocalStrService } from 'src/app/service/localStr/local-str.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = {} as User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private localStrService: LocalStrService
  ) {}

  onSubmit(myForm: NgForm) {
    this.authService.login(myForm.value).subscribe((res: any) => {
      this.localStrService.setItem('user', res.data.user);
      this.localStrService.setItem('token', res.data.accessToken);
      this.router.navigate(['/']);
    });
  }
}
