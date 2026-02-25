import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  readonly product = input.required<Product>();
  readonly deleteProduct = output<number>();

  like(): void {
    this.product().likes += 1;
  }

  remove(): void {
    this.deleteProduct.emit(this.product().id);
  }

  openKaspi(): void {
    window.open(this.product().link, '_blank');
  }

  shareWhatsApp(): void {
    const message = `Посмотри этот товар на Kaspi: ${this.product().link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  stars(): number[] {
    return Array(Math.floor(this.product().rating)).fill(0);
  }
}
