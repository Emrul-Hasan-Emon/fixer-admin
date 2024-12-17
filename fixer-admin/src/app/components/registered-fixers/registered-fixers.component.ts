import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fixer, FixerResponse } from 'src/app/models/fixer';
import { FixerService } from 'src/app/services/fixer/fixer.service';

@Component({
  selector: 'app-registered-fixers',
  templateUrl: './registered-fixers.component.html',
  styleUrls: ['./registered-fixers.component.css'],
})
export class RegisteredFixersComponent implements OnInit {
  fixers: Fixer[] = [];

  constructor(private fixerService: FixerService, private router: Router) {}

  ngOnInit(): void {
    this.fetchRegisteredFixersInformation();
  }

  private fetchRegisteredFixersInformation() {
    this.fixerService.getRegisteredFixers().subscribe(
      (fixerResponse: FixerResponse) => {
        if (fixerResponse.data) {
          this.fixers = fixerResponse.data;
          console.log('');
          console.log('fixers: ', this.fixers);
          
        }
      },
      (error) => {
        console.error('An unexpected occured');
        alert('Error occured while getting newly fixers information');
      }
    );
  }

  public getFullName(fixer: Fixer): string {
    return fixer.first_name + ' ' + fixer.last_name;
  }

  seeDetails(fixer: Fixer) {
    this.fixerService.publishFixerDetails(fixer);
    this.router.navigate(['fixer-details']);
  }
}
