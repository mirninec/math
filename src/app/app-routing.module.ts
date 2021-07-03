import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMathComponent } from './about-math/about-math.component';
import { AboutComponent } from './about/about.component';
import { ChangeLangComponent } from './change-lang/change-lang.component';
import { EnterComponent } from './enter/enter.component';
import { HowLearnComponent } from './how-learn/how-learn.component';
import { ResumeComponent } from './resume/resume.component';
import { StartPageComponent } from './start-page/start-page.component';
import { TranslaterComponent } from './translater/translater.component';

const routes: Routes = [
  { path: '', component: StartPageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  { path: 'about-math', component: AboutMathComponent },
  { path: 'how-learn', component: HowLearnComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'change-lang', component: ChangeLangComponent },
  { path: 'enter', component: EnterComponent },
  { path: 'translater', component: TranslaterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
