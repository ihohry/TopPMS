import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from './projects.service';
import { Project } from '../common/protocols';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private projectsService: ProjectsService, public router: Router) {}

  ngOnInit() {
this.projectsService.getProjects().then(data=>{
  console.log(data);
})

  }

  getProjectDetailsURL(project: Project) {
    return ['/projects/' + project.id];
  }

  createProject() {
    this.router.navigate(['./create']);
  }

  getProjectUpdateURL(project: Project) {
    return ['/projects/update/' + project.id];
  }

  deleteProject(id: string) {
    const project: Project = this.projectsService.projects.find(p => p.id === id);
    this.projectsService.deleteProject(this.projectsService.projects.indexOf(project));
  }
}
