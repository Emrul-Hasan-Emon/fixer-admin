import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SliderImage, SliderImageResponse } from 'src/app/models/slider_image';
import { SliderImageService } from 'src/app/services/slider/slider-image.service';

@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrls: ['./slider-images.component.css']
})
export class SliderImagesComponent implements OnInit {
  images: SliderImage[] = [];

  constructor(
    private sliderImageService: SliderImageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchAllSliderImages();
  }

  private fetchAllSliderImages() {
    this.sliderImageService.getAllSliderImages().subscribe(
      (resp: SliderImageResponse) => {
        if (resp.data) {
          this.images = resp.data;
        } else {
          this.images = [];
        }
      },
      (error) => {
        console.log(error);
        alert('Error occured while getting images');
      }
    )
  }

  public addNewImage() {
    this.router.navigate(['image-add']);
  }
}
