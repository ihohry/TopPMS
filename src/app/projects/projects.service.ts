import { Project, Member, Task } from '../common/protocols';





import { Injectable } from '@angular/core';
import { HttpRequestor } from '../common/http.requestor';
import { Constants } from '../common/constants';

@Injectable()

export class ProjectsService {
    public projects: Array<Project> = [];
    
    // [
    //     {
    //         id: '0',
    //         name: 'VizLocal',
    //         type: 'web',
    //         owner: 'Marian BB',
    //         members: new Array<Member>(),
    //         taskId: '11'
    //     },
    //     {
    //         id: '1',
    //         name: 'Elicall',
    //         type: 'mobile',
    //         owner: 'Volodia DD',
    //         members: new Array<Member>(),
    //         taskId: '12'
    //     },
    //     {
    //         id: '2',
    //         name: 'Divtricks',
    //         type: 'web',
    //         owner: 'Volodia DD',
    //         members: new Array<Member>(),
    //         taskId: '13'
    //     }
    // ];


    constructor(private httpRequestor: HttpRequestor) {

    }


    public getProjects(): Promise<any> {
        return this.httpRequestor.getRequest(Constants.ProjectsEndpoint).then(data => {
            this.projects = data;
       
        });

        // return this.http.get('//localhost:8080/cool-cars')
        //     .toPromise()
        //     .then(response => response as Project[])
        //     .catch(this.handleError);
    }


    public getProject(id: string): Project {
        return this.projects.find(p => p.id === id);
    }

    deleteProject(index: number) {
        this.projects.splice(index, 1);
    }

    createProject(project: Project) {
        this.projects.push(project);
    }

    getProjectUpdateURL(project: Project) {
        return ['/projects/update/' + project.id];
    }

    getProjectById(id: string): Project {
        return this.projects.find(project => project.id === id);
    }

    updateProject(index: number, project: Project) {
        this.projects[index] = project;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
