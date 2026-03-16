// src/app/features/products/data/products.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PRODUCTS, PRODUCT_CATEGORIES } from './products.mock';
import { ProductCategory, ProductItem } from '../data/product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    getCategories(): Observable<ProductCategory[]> {
        return of(PRODUCT_CATEGORIES);
    }

    getProducts(): Observable<ProductItem[]> {
        return of(MOCK_PRODUCTS);
    }

    // FUTURA IMPLEMENTAÇÃO:
    // Método reservado para consulta individual do produto.
    // Exemplo futuro esperado:
    // getProductById(productId: number): Observable<ProductItem> { ... }
}
