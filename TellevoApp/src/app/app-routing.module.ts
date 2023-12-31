import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'restablecerpass',
    loadChildren: () => import('./restablecerpass/restablecerpass.module').then( m => m.RestablecerpassPageModule)
  },
  {
    path: 'page404',
    loadChildren: () => import('./page404/page404.module').then( m => m.Page404PageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'perfil-conductor',
    loadChildren: () => import('./perfil-conductor/perfil-conductor.module').then( m => m.PerfilConductorPageModule)
  },
  {
    path: 'crear-vehiculo',
    loadChildren: () => import('./crear-vehiculo/crear-vehiculo.module').then( m => m.CrearVehiculoPageModule)
  },
  {
    path: '**',
    redirectTo: 'page404',
    pathMatch: 'full'
  },  {
    path: 'perfil-pasajero',
    loadChildren: () => import('./perfil-pasajero/perfil-pasajero.module').then( m => m.PerfilPasajeroPageModule)
  },

  

  

  




  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
