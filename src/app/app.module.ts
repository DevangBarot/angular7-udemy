import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AppRoutingModule } from './app-routing.module';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {SharedModule} from './shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ShoppingListService , RecipeService , DataStorageService , AuthService , AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
