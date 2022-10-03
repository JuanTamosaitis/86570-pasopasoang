import { MockArticulosFamiliasService } from './../../services/mock-articulos-familias.service';
import { Component, OnInit } from '@angular/core';
import { ArticulosFamiliasService } from 'src/app/services/articulos-familias.service';
import {
  ArticuloFamilia,
  ArticulosFamilias,
} from 'src/app/models/articulo-familia';

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css'],
})
export class ArticulosFamiliasComponent implements OnInit {
  items = ArticulosFamilias;
  titulo = 'Articulos Familias';

  constructor(
    //private articulosFamiliasService: MockArticulosFamiliasService
    private articulosFamiliasService: ArticulosFamiliasService
  ) {}

  ngOnInit(): void {
    this.getFamiliasArticulos();
  }

  getFamiliasArticulos() {
    this.articulosFamiliasService.get().subscribe((res: ArticuloFamilia[]) => {
      this.items = res;
    });
  }
}
