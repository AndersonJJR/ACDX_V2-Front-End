// src/app/features/products/products.page.ts
import { AsyncPipe, CommonModule, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from './data/products.service';
import { ProductCategory, ProductItem } from './data/product.model';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, RouterLink, AsyncPipe, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './products.page.html',
  styleUrl: './products.page.scss',
})
export class ProductsPage {
  private readonly productsService = inject(ProductsService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  protected readonly isNewProductModalOpen = signal(false);
  protected newProductForm: FormGroup;

  protected readonly formCategories = [
    { value: 'PRODUTOS_ALIMENTARES', label: 'Produtos alimentares' },
    { value: 'PRODUTOS_DE_LIMPEZA', label: 'Produtos de Limpeza' },
    { value: 'CUIDADOS_PESSOAIS', label: 'Cuidados pessoais' },
    { value: 'ESCRITORIO_E_UTILIDADES', label: 'Escritório e utilidades' }
  ];

  constructor() {
    this.newProductForm = this.fb.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      custo_unitario: [null, [Validators.required, Validators.min(0)]],
      tempo_producao_minutos: [null, [Validators.required, Validators.min(0)]],
      preco_sugerido: [null, [Validators.required, Validators.min(0)]]
    });
  }

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

  protected openNewProductModal(): void {
    this.newProductForm.reset();
    this.isNewProductModalOpen.set(true);
  }

  protected closeNewProductModal(): void {
    this.isNewProductModalOpen.set(false);
  }

  protected saveNewProduct(): void {
    if (this.newProductForm.valid) {
      const produtoData = this.newProductForm.value;
      
      this.productsService.cadastrarProduto(produtoData).subscribe({
        next: (response) => {
          console.log('Produto cadastrado com sucesso!', response);
          this.closeNewProductModal();
          // Aqui no futuro pode-se atualizar a lista de produtos na tela
        },
        error: (error) => {
          console.error('Erro ao cadastrar produto:', error);
          alert('Houve um erro ao tentar salvar o produto.');
        }
      });
    } else {
      this.newProductForm.markAllAsTouched();
    }
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

