import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SliderImageService } from 'src/app/services/slider/slider-image.service';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent {
  imageBase64: string = '';

  constructor(
    private sliderImageService: SliderImageService,
    private router: Router
  ) {}

  /**
   * Handles file selection and converts the image to a Base64 string.
   * @param event - File input change event.
   */
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imageBase64 = reader.result as string;
      };

      reader.onerror = () => {
        alert('Failed to read file. Please try again.');
      };

      reader.readAsDataURL(file);
    }
  }

  /**
   * Sends the Base64 image string to the backend.
   */
  public addNewSliderImage() {
    if (this.imageBase64) {
      this.sliderImageService.addNewSliderImage(this.imageBase64).subscribe(
        (resp: any) => {
          this.router.navigate(['slider']);
        },
        (error) => {
          alert('Failed to upload the image. Please try again.');
        }
      );
    } else {
      alert('Please select an image to upload.');
    }
  }
}
