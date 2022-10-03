import { ArticulosFamilias } from './../models/articulo-familia';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockArticulosFamiliasService {

  constructor() { }

  get() {
    return of(ArticulosFamilias);
  }
}
