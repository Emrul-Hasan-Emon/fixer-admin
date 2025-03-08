import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fixer } from 'src/app/models/fixer';
import { Payment } from 'src/app/models/payment';
import { Proposal, ProposalResponse } from 'src/app/models/proposal';
import { FixerService } from 'src/app/services/fixer/fixer.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { ProposalService } from 'src/app/services/proposal/proposal.service';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-fixer-details',
  templateUrl: './fixer-details.component.html',
  styleUrls: ['./fixer-details.component.css']
})

export class FixerDetailsComponent implements OnInit {
  fixer: Fixer | undefined = undefined;
  proposals: Proposal[] = [];
  isNewFixer: boolean = false;

  constructor(
    private fixerService: FixerService,
    private proposalService: ProposalService,
    private taskService: TaskService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchFixerDetails();
    this.checkIfNewFixer();
  }

  private checkIfNewFixer() {
    this.fixerService.getEventForNewFixer().subscribe(
      (yes: any) => {
        this.isNewFixer = yes;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  private fetchFixerDetails() {
    console.log('fetching fixer details');
    this.fixerService.getPublishedFixerDetails().subscribe(
      (fixer: Fixer) => {
        if (fixer) {
          this.fixer = fixer;
          console.log('');
          console.log('Fixer: ', fixer);
          
          this.fetchProposalsForTheFixer(fixer.fixer_id);
        }
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
    this.taskService.getSpecificTaskDetails(proposal.taskId).subscribe(
      (response: any) => {
        if (response.data) {
          this.taskService.publishTaskDetails(response.data);
          this.router.navigate(['task-details'])
        }
      },
      (error) => {
        console.log(error);
        alert('An error occured while fetching task details');
      }
    )
  }

  public approveFixer(fixer: Fixer) {
    const confirmed = window.confirm("Are you sure you want to approve this fixer?");
    if (confirmed) {
      this.fixerService.approveNewFixer(fixer.fixer_id).subscribe(
        (data: any) => {
          console.log('Approve fixer response:', data);
          if (data.message) {
            if (data.message == 'Fixer is registered') {
              this.router.navigate(['new-fixers']);
            }
          }
        }
      );
    }
  }
  
  public declineFixer(fixer: Fixer) {
    const confirmed = window.confirm("Are you sure you want to decline this fixer?");
    if (confirmed) {
      this.fixerService.declineFixer(fixer.fixer_id).subscribe(
        (data: any) => {
          if (data.message) {
            if (data.message == 'Fixer is declined') {
              this.router.navigate(['new-fixers']);
            }
          }
        }
      );
    }
  }

  public checkPaymentStatus(payment: Payment) {
    this.paymentService.checkPaymentStatus(payment).subscribe(
      (data) => {
        if (data.pp_PaymentResponseCode) {
          if (data.pp_PaymentResponseCode === "121") {
            alert('The amount is debited successfully');
          } else {
            alert('The amount could not debited successfully');
          }
        } else {
          alert('Something went error');
        }
      }
    )
  }
}