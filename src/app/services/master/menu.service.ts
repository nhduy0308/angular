import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Menu } from 'src/app/models/master/Menu';
import { menuData } from 'src/app/data/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  Get(): Observable<Menu[]> {
    return of(menuData);
  }
}
