import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { CardFormComponent } from './views/card-form/card-form.component';
import { AppRoutingModule } from './routes/routing.module';
import { TableListComponent } from './components/table-list/table-list.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    CardFormComponent,
    TableListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
