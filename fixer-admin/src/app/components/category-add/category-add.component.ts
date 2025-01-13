import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent {
  category: string = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  public addNewImage() {
    if (this.category.length !== 0) {
      this.categoryService.addNewCategory(this.category).subscribe(
        (resp: any) => {
          this.router.navigate(['category']);
        }
      )
    } else {
      alert('Category filed is empty')
    }
  }
}
