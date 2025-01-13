import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationResponse } from 'src/app/models/location';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations: Location[] = [];

  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchAllLocations();
  }

  private fetchAllLocations() {
    this.locationService.getAllLocations().subscribe(
      (resp: LocationResponse) => {
        if (resp.data) {
          this.locations = resp.data;
        } else {
          this.locations = [];
        }
      },
      (error) => {
        console.log(error);
        alert('An error occured while getting locations');
      }
    )
  }

  public addNewLocation() {
    this.router.navigate(['location-add']);
  }
}
