import { BehaviorSubject, switchMap } from 'rxjs';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from './data/products.service';
import { ProductCategory, ProductItem } from './data/product.model';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './products.page.html',
  styleUrl: './products.page.scss',
})
export class ProductsPage {
  private readonly productsService = inject(ProductsService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  protected readonly isNewProductModalOpen = signal(false);
  protected newProductForm: FormGroup;

  protected readonly isEditProductModalOpen = signal(false);
  protected editProductForm: FormGroup;
  protected selectedProduct = signal<ProductItem | null>(null);
  protected selectedEditFile: File | null = null;

  protected readonly isConfirmModalOpen = signal(false);
  protected confirmActionType = signal<'disable' | 'delete' | null>(null);

  protected selectedFile: File | null = null;

  protected readonly formCategories = [
    { value: 'PRODUTOS_ALIMENTARES', label: 'Produtos alimentares' },
    { value: 'PRODUTOS_DE_LIMPEZA', label: 'Produtos de Limpeza' },
    { value: 'CUIDADOS_PESSOAIS', label: 'Cuidados pessoais' },
    { value: 'ESCRITORIO_E_UTILIDADES', label: 'Escritório e utilidades' }
  ];

  constructor() {
    this.newProductForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: [''],
      categoria: ['', Validators.required],
      custo_unitario: [null, [Validators.required, Validators.min(0)]],
      tempo_producao_minutos: [null, [Validators.required, Validators.min(0)]],
      preco_sugerido: [null, [Validators.required, Validators.min(0)]]
    });

    this.editProductForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: [''],
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

  private readonly refreshProducts$ = new BehaviorSubject<void>(undefined);

  protected readonly products = toSignal(
    this.refreshProducts$.pipe(
      switchMap(() => this.productsService.getProducts())
    ),
    { initialValue: [] as ProductItem[] }
  );

  protected loadProducts(): void {
    this.refreshProducts$.next();
  }

  protected readonly filteredProducts = computed(() => {
    const selected = this.selectedCategoryId();
    const items = this.products();

    if (selected === 'inativos') {
      return items.filter((item) => item.ativo === false);
    }

    const activeItems = items.filter((item) => item.ativo !== false);

    if (selected === 'all') {
      return activeItems;
    }

    return activeItems.filter((item) => item.categoria === selected);
  });

  protected selectCategory(categoryId: string): void {
    this.selectedCategoryId.set(categoryId);
  }

  protected openProduct(product: ProductItem): void {
    this.selectedProduct.set(product);
    this.editProductForm.patchValue({
      nome: product.nome,
      descricao: product.descricao,
      categoria: product.categoria,
      custo_unitario: product.custo_unitario,
      tempo_producao_minutos: product.tempo_producao_minutos,
      preco_sugerido: product.preco_sugerido
    });
    this.selectedEditFile = null;
    this.isEditProductModalOpen.set(true);
  }

  protected closeEditProductModal(): void {
    this.isEditProductModalOpen.set(false);
    this.selectedProduct.set(null);
  }

  protected onEditFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedEditFile = file;
    }
  }

  protected openNewProductModal(): void {
    this.newProductForm.reset();
    this.selectedFile = null;
    this.isNewProductModalOpen.set(true);
  }

  protected onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
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
          if (this.selectedFile && response && response.id) {
            this.productsService.uploadProductImage(response.id, this.selectedFile).subscribe({
              next: () => {
                console.log('Imagem do produto enviada com sucesso!');
                this.closeNewProductModal();
                this.loadProducts();
              },
              error: (err) => {
                console.error('Erro ao enviar a imagem:', err);
                alert('Produto cadastrado, mas houve um erro ao enviar a imagem.');
                this.closeNewProductModal();
              }
            });
          } else {
            this.closeNewProductModal();
            this.loadProducts();
          }
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

  protected saveEditProduct(): void {
    const product = this.selectedProduct();
    if (this.editProductForm.valid && product && product.id) {
      const produtoData = this.editProductForm.value;
      
      this.productsService.atualizarProduto(product.id, produtoData).subscribe({
        next: (response) => {
          console.log('Produto atualizado com sucesso!', response);
          if (this.selectedEditFile) {
            this.productsService.uploadProductImage(product.id!, this.selectedEditFile).subscribe({
              next: () => {
                console.log('Imagem do produto atualizada com sucesso!');
                this.closeEditProductModal();
                this.loadProducts();
              },
              error: (err) => {
                console.error('Erro ao atualizar a imagem:', err);
                alert('Produto atualizado, mas houve um erro ao enviar a imagem.');
                this.closeEditProductModal();
              }
            });
          } else {
            this.closeEditProductModal();
            this.loadProducts();
          }
        },
        error: (error) => {
          console.error('Erro ao atualizar produto:', error);
          alert('Houve um erro ao tentar atualizar o produto.');
        }
      });
    } else {
      this.editProductForm.markAllAsTouched();
    }
  }

  protected openConfirmModal(action: 'disable' | 'delete'): void {
    this.confirmActionType.set(action);
    this.isConfirmModalOpen.set(true);
  }

  protected closeConfirmModal(): void {
    this.isConfirmModalOpen.set(false);
    this.confirmActionType.set(null);
  }

  protected confirmAction(): void {
    const action = this.confirmActionType();
    const product = this.selectedProduct();

    if (!product || !product.id) return;

    if (action === 'disable') {
      this.productsService.desabilitarProduto(product.id).subscribe({
        next: () => {
          this.closeConfirmModal();
          this.closeEditProductModal();
          this.loadProducts();
        },
        error: (err) => {
          console.error('Erro ao desabilitar', err);
          alert('Erro ao desabilitar o produto.');
        }
      });
    } else if (action === 'delete') {
      this.productsService.excluirProduto(product.id).subscribe({
        next: () => {
          this.closeConfirmModal();
          this.closeEditProductModal();
          this.loadProducts();
        },
        error: (err) => {
          console.error('Erro ao excluir', err);
          alert('Erro ao excluir o produto.');
        }
      });
    }
  }

  protected getProductImageUrl(product: ProductItem): string {
    if (!product.imagemUrl) {
      return '';
    }
    // O backend salva product.imagemUrl como "/files/nome_da_foto.jpg"
    // E o endpoint público é http://localhost:8080/api/v1/image/files/...
    return `http://localhost:8080/api/v1/image${product.imagemUrl}`;
  }

  protected hasProductImage(product: ProductItem): boolean {
    return !!product.imagemUrl;
  }
}

