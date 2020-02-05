import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    SlidesComponent, StartButtonComponent
  ],
  exports: [
    SlidesComponent, StartButtonComponent
  ],
  imports: [
    CommonModule, FormsModule, IonicModule
  ]
})
export class ComponentsModule { }
