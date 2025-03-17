import { Component } from '@angular/core';
import { ApplicantService } from '../../../services/applicant.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.css'
})
export class JobSearchComponent {
    jobs: any[] = [];
    currentPage = 1;
    totalPages = 1;
    searchQuery = '';
    pageSize = 10;
    title = '';
    
    constructor(private applicantService: ApplicantService) {}

    ngOnInit() {
      this.fetchJobs();
    }
  
    fetchJobs() {
      this.applicantService.getJobs(this.currentPage, this.pageSize, this.title).subscribe((response: any) => {
        this.jobs = response.results;
        this.totalPages = response.totalPages;
      });
    }
  
    searchJobs() {
      this.currentPage = 1;
      this.fetchJobs();
    }

    apply(jobId: number) {
      this.applicantService.applyForJob(jobId).subscribe(
        () => {
          alert('Application successful!');
          this.fetchJobs(); // Refresh job listings after applying
        },
        (error) => {
          alert('Application failed: ' + (error.error?.message || 'Please try again.'));
        }
      );
    }
  
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchJobs();
      }
    }
  
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchJobs();
      }
    }
}
