import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';


const MaterialComponents = [
  MatIconModule
];


@NgModule({
  declarations: [
    CommandBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    [MaterialComponents]
    
  ],
  exports: [
    CommandBarComponent,
    HeaderComponent,
    [MaterialComponents]
  ]
})
export class SharedModule { }
