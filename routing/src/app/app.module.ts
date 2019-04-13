import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SimpleRedicrectComponent } from './pages/simple-redicrect/simple-redicrect.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { LeftTabComponent } from './components/left-tab/left-tab.component';
import { RightTabComponent } from './components/right-tab/right-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    AdminPageComponent,
    SimpleRedicrectComponent,
    NotFoundComponent,
    TabsComponent,
    LeftTabComponent,
    RightTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
