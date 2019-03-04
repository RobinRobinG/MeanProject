import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components//footer/footer.component';
import { ProductsListComponent } from './components/productslist/productslist.component';
import { CreateProductComponent } from './components/createproduct/createproduct.component';
import { EditProductComponent } from './components/editproduct/editproduct.component';
import { ProductoptionsdialogComponent } from './components/productoptionsdialog/productoptionsdialog.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth-guard.service';
import { ProductService } from './services/product.service';
import { ImageService } from './services/image.service';

import { NgFlashMessagesModule } from 'ng-flash-messages';
import { JwtModule } from '@auth0/angular-jwt';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatMenuModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatGridListModule, MatDialogModule, MatRadioModule, MatSidenavModule } from '@angular/material';

export function getToken(): string {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent,
    FooterComponent,
    ProductsListComponent,
    CreateProductComponent,
    EditProductComponent,
    ProductoptionsdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    JwtModule.forRoot({
      config: {
          tokenGetter: getToken
      }
    }),
    FormsModule,
    NgFlashMessagesModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatRadioModule,
    MatGridListModule,
    MatDialogModule,
    MatSidenavModule
  ],
  entryComponents : [ProductoptionsdialogComponent],
  providers: [ValidateService, JwtModule, AuthService, AuthGuard, ProductService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
