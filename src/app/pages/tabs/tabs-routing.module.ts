import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    // para que entre a esa ruta por default
    path: '',
    redirectTo: '/tabs/infinite-scroll',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'infinite-scroll',
        // la siguiente seccion es para hacer la carga lenta o lazy loading
        loadChildren: () => import('../infinite-scroll/infinite-scroll.module').then(m => m.InfiniteScrollPageModule)
      },
      {
        path: 'slides',
        // la siguiente seccion es para hacer la carga lenta o lazy loading
        loadChildren: () => import('../slides/slides.module').then(m => m.SlidesPageModule)
      },
      {
        path: 'segment',
        // la siguiente seccion es para hacer la carga lenta o lazy loading
        loadChildren: () => import('../segment/segment.module').then(m => m.SegmentPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
