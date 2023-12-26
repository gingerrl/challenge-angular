import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { CardFormComponent } from './views/card-form/card-form.component';
import { AppRoutingModule } from './routes/routing.module';
import { TableListComponent } from './components/table-list/table-list.component';
import { CardListService } from './services/card-list.service';
import { HttpClientModule } from '@angular/common/http';
import { CardFormService } from './services/card-form.service';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    CardFormComponent,
    TableListComponent,
    ModalDeleteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CardListService,
    CardFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
