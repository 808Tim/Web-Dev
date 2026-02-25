import { CommonModule } from '@angular/common';
import { Component, effect, input, output, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  readonly categoryName = input.required<string>();
  readonly products = input.required<Product[]>();
  readonly deleteProduct = output<number>();
  readonly visibleProducts = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.visibleProducts.set([...this.products()]);
    });
  }

  onDeleteProduct(productId: number): void {
    this.visibleProducts.update((items) => items.filter((item) => item.id !== productId));
    this.deleteProduct.emit(productId);
  }
}
