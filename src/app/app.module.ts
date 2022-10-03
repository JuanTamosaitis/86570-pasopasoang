import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MyInterceptor } from './shared/MyInterceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './components/articulos-familias/articulos-familias.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ArticulosFamiliasComponent,
    MenuComponent,
    ArticulosComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/inicio', pathMatch: 'full'},
      {path: 'inicio', component: InicioComponent},
      {path: 'articulosfamilias', component: ArticulosFamiliasComponent},
      {path: 'articulos', component: ArticulosComponent}
    ]
    ),
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbModalModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue:"/"},
    {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true}
  ],
  entryComponents: [ModalDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
