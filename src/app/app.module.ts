import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';

 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';

 import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
 import { UserLoginFormComponent } from './user-login-form/user-login-form.component';

 // Import Angular Material modulesimport { MatInputModule } from '@angular/material/input';
 import { MatInputModule } from '@angular/material/input';
 import { MatButtonModule } from '@angular/material/button';
 import { MatCardModule } from '@angular/material/card';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { MatDialogModule } from '@angular/material/dialog';
 import { MatSnackBarModule } from '@angular/material/snack-bar';


 import { FormsModule } from '@angular/forms';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { HttpClientModule } from '@angular/common/http';

 @NgModule({
   declarations: [
     UserRegistrationFormComponent,
     UserLoginFormComponent,
   ],
   imports: [
     AppRoutingModule,
     BrowserModule,
     HttpClientModule,
     FormsModule,
     MatDialogModule,
     MatInputModule,
     MatButtonModule,
     MatCardModule,
     MatFormFieldModule,
     MatSnackBarModule,
     BrowserAnimationsModule,
   ],
   providers: [],
   bootstrap: []
 })
 export class AppModule { }