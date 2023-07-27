import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ToastService } from '../toast/toast.service';

const apiUrl = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private toastService: ToastService
  ) {}

  login(data: { email: string; password: string }): Observable<User> {
    return this.httpClient
      .post<User>(`${apiUrl}/signin`, data)
      .pipe(catchError((error) => this.handleError(error)));
  }

  register(data: {
    email: string;
    password: string;
    name: string;
  }): Observable<User> {
    return this.httpClient
      .post<User>(`${apiUrl}/signup`, data)
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError = (error: HttpErrorResponse) => {
    let errorMessage = 'Lỗi không xác định';

    if (error.error instanceof ErrorEvent) {
      // Lỗi xảy ra trong phía client
      errorMessage = `Lỗi: ${error.error.message}`;
    } else {
      // Lỗi xảy ra trong phía server
      errorMessage = `Mã phản hồi từ máy chủ: ${error.status}, thông báo lỗi: ${
        error.error.message || error.message
      }`;
    }
    // Trả về một Observable với thông báo lỗi để xử lý tiếp
    this.toastService.showMessage('error', 'Error', errorMessage);
    return throwError(errorMessage);
  };
}
