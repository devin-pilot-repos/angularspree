import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  success(message: string, title?: string): any {
    console.log('Toast Success:', title, message);
    return {};
  }

  error(message: string, title?: string): any {
    console.error('Toast Error:', title, message);
    return {};
  }

  info(message: string, title?: string): any {
    console.info('Toast Info:', title, message);
    return {};
  }

  warning(message: string, title?: string): any {
    console.warn('Toast Warning:', title, message);
    return {};
  }

  show(message: string, title?: string): any {
    console.log('Toast Show:', title, message);
    return {};
  }

  clear(): void {
    console.log('Toast Clear');
  }

  remove(toastId: number): void {
    console.log('Toast Remove:', toastId);
  }

  onHidden: Observable<any> = of({});
  onShown: Observable<any> = of({});
  onTap: Observable<any> = of({});
}

export class ActiveToast<T> {
  toastId: number = 0;
  message: string = '';
  title?: string;
  toastRef: any;
  onShown: Observable<any> = of({});
  onHidden: Observable<any> = of({});
  onTap: Observable<any> = of({});
  onAction: Observable<any> = of({});
}
