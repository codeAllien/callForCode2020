import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'symptoms',
    loadChildren: () => import('./symptoms-modal/symptoms-modal.module').then(m => m.SymptomsModalPageModule)
  },
  {
    path: 'positive-contact',
    loadChildren: () => import('./positive-contact/positive-contact.module').then(m => m.PositiveContactPageModule)
  },
  {
    path: 'animals',
    loadChildren: () => import('./animals/animals.module').then(m => m.AnimalsPageModule)
  },
  {
    path: 'emergency-contact',
    loadChildren: () => import('./emergency-contact/emergency-contact.module').then(m => m.EmergencyContactPageModule)
  },
  {
    path: 'collect-position',
    loadChildren: () => import('./collect-position/collect-position.module').then(m => m.CollectPositionPageModule)
  },
  {
    path: 'success-page', loadChildren: () => import('./success-page/success-page.module').then(m => m.SuccessPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
