import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { ContactMeComponent } from './shared/components/contact-me/contact-me.component';
import { ExperienceComponent } from './shared/components/experience/experience.component';
import { HomeComponent } from './shared/components/home/home.component';
import { DetailComponent } from './shared/components/experience/detail/detail.component';
import { StudiesComponent } from './shared/components/studies/studies.component';

const routes: Routes = [
  {path:'',
  component:SkeletonComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'contact-me', component:ContactMeComponent},
    {path:'studies',component: StudiesComponent},
    {path:'experience/detail/:id', component: DetailComponent},
    {path:'experience', component: ExperienceComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
