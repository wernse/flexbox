import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JustifyContentComponent } from './justify-content/justify-content.component';
import { HomeComponent } from './home/home.component';

//
const appRoutes: Routes = [
//   {
//     path: 'about',
//     component: AboutUsComponent
//   },
  {
    path: 'justify',
    component: JustifyContentComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
      path: '**',
      redirectTo: ''
  }
];
export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);