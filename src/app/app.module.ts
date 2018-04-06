import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistsDetailComponent } from './artists-detail/artists-detail.component';
import { ArtistsService} from './artists/service/artists.service';

const appRoutes: Routes = [
  { path: 'artists', component: ArtistsComponent },
  { path: 'artists/:id',      component: ArtistsDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
