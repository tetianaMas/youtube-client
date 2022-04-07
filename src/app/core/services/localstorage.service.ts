import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {
  getItem<T>(key: string): T | void {
    const res = localStorage.getItem(key);
    if (res) {
      return <T>JSON.parse(res);
    }
  }

  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
