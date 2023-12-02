import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ComponentsMenuBarComponent } from './componentes/menu-bar/menu-bar.component'
import { BigCardComponent } from './componentes/big-card/big-card.component';
import { PostCardComponent } from './componentes/post-card/post-card.component';
import { AuthorPostComponent } from './componentes/author-post/author-post.component';
import { HomeComponent } from './pages/home/home.component'

@NgModule({
  declarations: [AppComponent, ComponentsMenuBarComponent, BigCardComponent, PostCardComponent, AuthorPostComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
