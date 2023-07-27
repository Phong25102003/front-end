import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStrService {
  private localStorageSubject = new Subject<string>();

  setItem(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
    this.localStorageSubject.next(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
    this.localStorageSubject.next(key);
  }

  getLocalStorageChanges(): Observable<string> {
    return this.localStorageSubject.asObservable();
  }
}
