import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: '**',
    component: AppComponent
  }
];

export const AppRoutes = RouterModule.forRoot(
  appRoutes, {
    useHash: false,
    preloadingStrategy: PreloadAllModules
  }
);
