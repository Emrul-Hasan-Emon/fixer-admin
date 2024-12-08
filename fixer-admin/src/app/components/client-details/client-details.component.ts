import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {
  client: any;
  p = [1, 2, 3]
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const clientId = this.route.snapshot.paramMap.get('id');
    this.fetchClientDetails(clientId);
  }

  fetchClientDetails(clientId: string | null) {
    // Simulating API call with hard-coded data
    if (clientId === '674cac225c13112c2b72701d') {
      this.client = {
        client_id: '674cac225c13112c2b72701d',
        phone_number: '01700000002',
        first_name: 'Tanvir',
        last_name: 'Ahmed',
        dob: '1996-08-14',
        city: 'Karachi',
        gender: 'Male',
        created_at: '2024-12-02 00:34:10'
      };
    } else {
      // Handle case where client ID is not found
      this.client = null;
    }
  }

  goBack() {
    this.router.navigate(['/clients']); // Navigate back to the Clients page
  }
}
