import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthGuard } from './auth.guard';
import { SimpleRedicrectComponent } from './pages/simple-redicrect/simple-redicrect.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoadingGuard } from './loading.guard';
import { TabsComponent } from './pages/tabs/tabs.component';
import { LeftTabComponent } from './components/left-tab/left-tab.component';
import { RightTabComponent } from './components/right-tab/right-tab.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'simple', component: SimpleRedicrectComponent },
  { path: 'user/:id', component: UserPageComponent },

  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'another',
    loadChildren: './another-module/another.module#AnotherModule',
    // canActivate: [AuthGuard],
    canLoad: [LoadingGuard],
  },

  {
    path: 'parent',
    component: TabsComponent,
    children: [
      { path: 'left', component: LeftTabComponent },
      { path: 'right', component: RightTabComponent },
    ]
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
