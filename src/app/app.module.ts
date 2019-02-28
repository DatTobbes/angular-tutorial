import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header.component';
import {AppComponent} from './app.component';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
