import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class LocalstorageService {
  private readonly prefix: string = 'youtube-client-';

  public getItem<T>(key: string): T | void {
    const res = localStorage.getItem(this.prefix + key);
    if (res) {
      return <T>JSON.parse(res);
    }
  }

  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(this.prefix + key, JSON.stringify(value));
  }

  public removeItem(key: string) {
    localStorage.removeItem(this.prefix + key);
  }
}
