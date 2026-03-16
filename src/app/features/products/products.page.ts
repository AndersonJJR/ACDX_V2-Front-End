// src/app/features/products/products.page.ts
import { AsyncPipe, CommonModule, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from './data/products.service';
import { ProductCategory, ProductItem } from './data/product.model';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, RouterLink, AsyncPipe, CurrencyPipe],
  templateUrl: './products.page.html',
  styleUrl: './products.page.scss',
})
export class ProductsPage {
  private readonly productsService = inject(ProductsService);
  private readonly router = inject(Router);

  protected readonly selectedCategoryId = signal('all');

  protected readonly categories = toSignal(
    this.productsService.getCategories(),
    { initialValue: [] as ProductCategory[] }
  );

  protected readonly products = toSignal(
    this.productsService.getProducts(),
    { initialValue: [] as ProductItem[] }
  );

  protected readonly filteredProducts = computed(() => {
    const selected = this.selectedCategoryId();
    const items = this.products();

    if (selected === 'all') {
      return items;
    }

    return items.filter((item) => item.categoryId === selected);
  });

  protected selectCategory(categoryId: string): void {
    this.selectedCategoryId.set(categoryId);
  }

  protected openProduct(product: ProductItem): void {
    // FUTURA IMPLEMENTAÇÃO:
    // Esta navegação ficará ativa quando a rota de detalhe do produto existir.
    // Exemplo futuro:
    // this.router.navigate(['/products', product.id]);

    console.log('Produto selecionado para futura página de detalhe:', product.id);
  }

  protected goToNewProduct(): void {
    // FUTURA IMPLEMENTAÇÃO:
    // Quando a tela de criação de produto existir, trocar por:
    // this.router.navigate(['/products/new']);

    console.log('Ação futura: abrir tela de novo produto');
  }

  protected getProductImageUrl(product: ProductItem): string {
    // DEMONSTRAÇÃO:
    // Esta função espera uma URL de imagem do produto para exibição.
    // Quando houver imagem real na API, retorne product.imageUrl.
    return product.imageUrl || '';
  }

  protected hasProductImage(product: ProductItem): boolean {
    return !!this.getProductImageUrl(product);
  }
}

