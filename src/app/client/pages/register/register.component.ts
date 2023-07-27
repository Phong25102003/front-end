import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}
  onSubmit(myForm: NgForm) {
    console.log(myForm.value);
    this.authService.register(myForm.value).subscribe((res: any) => {
      this.router.navigate(['/login']);
    });
  }
}
