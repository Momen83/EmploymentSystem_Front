import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  private apiUrl = 'https://localhost:7228/api/Applicant';

  constructor(private http: HttpClient) {}

  getJobs(page: number, pageSize: number, title: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?pageNumber=${page}&pageSize=${pageSize}&title=${title}`);
  }

  applyForJob(jobId: number): Observable<any> {

      return this.http.post(`${this.apiUrl}/apply/${jobId}`, {});
  }
}
