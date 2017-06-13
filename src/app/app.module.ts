import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { EnterComponent } from './enter';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    EnterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule
    /**
    RouterModule.forRoot([
        {
            path: 'heroes',
            component: AppComponent
        },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'detail/:id',
          component: HeroDetailComponent
        },
        {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        }
    ])*/
  ],
  providers: [
    HeroService
  ],
  bootstrap: [EnterComponent]
})
export class AppModule { }
  
