import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard} from './guards/auth-guard.service';
import { CreateProductComponent } from './components/createproduct/createproduct.component';
import { EditProductComponent } from './components/editproduct/editproduct.component';
import { ProductsListComponent } from './components/productslist/productslist.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'create', component: CreateProductComponent, canActivate: [AuthGuard]},
  { path: 'edit/:id', component: EditProductComponent, canActivate: [AuthGuard]},
  { path: 'list', component: ProductsListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
