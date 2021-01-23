import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefresherConAnimacionPageRoutingModule } from './refresher-con-animacion-routing.module';

import { RefresherConAnimacionPage } from './refresher-con-animacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefresherConAnimacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RefresherConAnimacionPage]
})
export class RefresherConAnimacionPageModule {}
