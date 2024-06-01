import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UnitComponent } from './pages/unit/unit.component';
import { CreateComponent } from './pages/unit/create/create.component';
import { EditComponent } from './pages/unit/edit/edit.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'unit',
    component: UnitComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent,
      }
    ]
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
