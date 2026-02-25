import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { categories, products } from './data/store.data';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  readonly categories: Category[] = categories;
  readonly selectedCategoryId = signal<number | null>(null);
  private readonly allProducts = signal<Product[]>(products.map((product) => ({ ...product })));

  readonly selectedCategoryName = computed(() => {
    const categoryId = this.selectedCategoryId();
    return this.categories.find((category) => category.id === categoryId)?.name ?? '';
  });

  readonly selectedProducts = computed(() => {
    const categoryId = this.selectedCategoryId();
    if (categoryId === null) {
      return [];
    }

    return this.allProducts().filter((product) => product.categoryId === categoryId);
  });

  selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
  }

  removeProduct(productId: number): void {
    this.allProducts.update((items) => items.filter((item) => item.id !== productId));
  }
}
