import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoryResponse } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchAllCategories();
  }

  private fetchAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      (resp: CategoryResponse) => {
        if (resp.data) {
          this.categories = resp.data;
        } else {
          this.categories = [];
        }
      },
      (error) => {
        console.log(error);
        alert('An error occured while fetching all categories');
      }
    )
  }

  public addNewCategory() {
    this.router.navigate(['category-add']);
  }

  public deleteCategory(categoryId: string) {
    const confirmed = window.confirm("Are you sure you want to delete this Category?");
    if (confirmed) {
      this.categoryService.deleteACategory(categoryId).subscribe(
        (resp: CategoryResponse) => {
          if (resp.data) {
            this.categories = resp.data;
          } else {
            this.categories = [];
          }
        },
        (error) => {
          console.log(error);
          alert('An error occured while fetching all categories');
        }
      )
    }    
  }
}
