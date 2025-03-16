import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { VacanciesComponent } from './components/employer/vacancies/vacancies.component';
import { CreateVacancyComponent } from './components/employer/create-vacancy/create-vacancy.component';
import { JobSearchComponent } from './components/applicant/job-search/job-search.component';
import { ApplyJobComponent } from './components/applicant/apply-job/apply-job.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'employer/vacancies', component: VacanciesComponent, canActivate: [authGuard] },
    { path: 'employer/create-vacancy', component: CreateVacancyComponent, canActivate: [authGuard] },
    { path: 'applicant/jobs', component: JobSearchComponent, canActivate: [authGuard] },
    { path: 'applicant/apply/:id', component: ApplyJobComponent, canActivate: [authGuard] },
];
