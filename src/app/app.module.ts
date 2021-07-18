import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { ContactMeComponent } from './shared/components/contact-me/contact-me.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ExperienceComponent } from './shared/components/experience/experience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageServiceService } from './services/message-service.service';
import { DetailComponent } from './shared/components/experience/detail/detail.component';
import { ProjectsService } from './services/projects.service';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FooterTwoComponent } from './layout/footer-two/footer-two.component';
import { AngularEmojisModule } from 'angular-emojis';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkeletonComponent,
    ContactMeComponent,
    HomeComponent,
    ExperienceComponent,
    DetailComponent,
    GalleryComponent,
    FooterTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEmojisModule
  ],
  providers: [MessageServiceService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
