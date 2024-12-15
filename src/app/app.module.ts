import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component';

@NgModule({
  declarations: [AppComponent, DynamicLoaderComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
