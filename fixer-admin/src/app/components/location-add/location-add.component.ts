import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})
export class LocationAddComponent {
  location: string = '';

  constructor (
    private locationService: LocationService,
    private router: Router
  ) {}

  public addNewLocation() {
    if (this.location.length !== 0) {
      this.locationService.addNewLocations(this.location).subscribe(
        (resp: any) => {
          this.router.navigate(['location']);
        }
      )
    } else {
      alert('Location filed is empty')
    }
  }
}
