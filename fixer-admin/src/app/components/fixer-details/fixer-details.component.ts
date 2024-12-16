import { Component, OnInit } from '@angular/core';
import { Fixer } from 'src/app/models/fixer';
import { Proposal, ProposalResponse } from 'src/app/models/proposal';
import { FixerService } from 'src/app/services/fixer/fixer.service';
import { ProposalService } from 'src/app/services/proposal/proposal.service';

@Component({
  selector: 'app-fixer-details',
  templateUrl: './fixer-details.component.html',
  styleUrls: ['./fixer-details.component.css']
})

export class FixerDetailsComponent implements OnInit {
  fixer: Fixer | undefined = undefined;
  proposals: Proposal[] = [];

  constructor(
    private fixerService: FixerService,
    private proposalService: ProposalService
  ) {}

  ngOnInit() {
    this.fetchFixerDetails();
  }

  private fetchFixerDetails() {
    this.fixerService.getPublishedFixerDetails().subscribe(
      (fixer: Fixer) => {
        this.fixer = fixer;
        this.fetchProposalsForTheFixer(fixer.fixer_id);
      },
      (error) => {
        console.log(error);
        alert('An error occured while fetching fixer details');
      }
    )
  }
  
  private fetchProposalsForTheFixer(fixerId: string) {
    this.proposalService.getProposalsForAFixer(fixerId).subscribe(
      (proposals: ProposalResponse) => {
        if (proposals.data) {
          this.proposals = proposals.data;
        }
      },
      (error) => {
        console.log(error);
        alert('An error occured while fetching proposal details for a fixer');
      }
    )
  }

  public getFullName(fixer: Fixer): string {
    return fixer.first_name + ' ' + fixer.last_name;
  }

  public seeTaskDetails(proposal: Proposal) {

  }
}