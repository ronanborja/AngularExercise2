import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule
  
];


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    [MaterialComponents]
  ],
  exports: [MaterialComponents]
})
export class UserModule { }
