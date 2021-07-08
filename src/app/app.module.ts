import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AboutMathComponent } from './about-math/about-math.component';
import { HowLearnComponent } from './how-learn/how-learn.component';
import { ResumeComponent } from './resume/resume.component';
import { ChangeLangComponent } from './change-lang/change-lang.component';
import { EnterComponent } from './enter/enter.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslaterComponent } from './translater/translater.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StartPageComponent,
    AboutMathComponent,
    HowLearnComponent,
    ResumeComponent,
    ChangeLangComponent,
    EnterComponent,
    TranslaterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
