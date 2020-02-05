import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    SlidesComponent, StartButtonComponent, LogoComponent
  ],
  exports: [
    SlidesComponent, StartButtonComponent, LogoComponent
  ],
  imports: [
    CommonModule, FormsModule, IonicModule
  ]
})
export class ComponentsModule { }
