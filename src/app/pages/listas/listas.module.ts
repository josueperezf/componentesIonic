import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasPageRoutingModule } from './listas-routing.module';

import { ListasPage } from './listas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ListasPageRoutingModule
  ],
  declarations: [ListasPage]
})
export class ListasPageModule {}
