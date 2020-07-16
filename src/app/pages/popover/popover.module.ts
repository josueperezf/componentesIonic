import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { PopoverPage } from './popover.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';
import { PopoverPageRoutingModule } from './popover-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PopoverPageRoutingModule
  ],
  entryComponents: [PopinfoComponent],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
