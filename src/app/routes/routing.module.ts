import { Routes, RouterModule } from "@angular/router";
import { CardFormComponent } from "../views/card-form/card-form.component";
import { MainViewComponent } from "../views/main-view/main-view.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {
        path: 'home',
        component: MainViewComponent,
    },
    {
        path: 'form',
        component: CardFormComponent,
    },

    {
        path: '**',
        redirectTo: 'home'
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }