import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefresherConAnimacionPage } from './refresher-con-animacion.page';

const routes: Routes = [
  {
    path: '',
    component: RefresherConAnimacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefresherConAnimacionPageRoutingModule {}
