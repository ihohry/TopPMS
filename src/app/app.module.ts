import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import {routing } from './app.routing';
import { ProjectsComponent } from './projects/projects.component';
import { UserService } from './login/user.service';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsService } from './projects/projects.service';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { ListItemComponent } from './list-item/list-item.component';
import { HttpRequestor } from './common/http.requestor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProjectsComponent,
    TasksComponent,
    ProjectDetailsComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    routing
     
  ],
  providers: [
    HttpRequestor,
    UserService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
