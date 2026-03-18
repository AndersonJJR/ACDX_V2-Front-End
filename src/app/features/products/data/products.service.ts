import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MOCK_PRODUCTS, PRODUCT_CATEGORIES } from './products.mock';
import { ProductCategory, ProductItem } from '../data/product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private readonly http = inject(HttpClient);

    getCategories(): Observable<ProductCategory[]> {
        return of(PRODUCT_CATEGORIES);
    }

    getProducts(): Observable<ProductItem[]> {
        return this.http.get<ProductItem[]>('http://localhost:8080/api/v1/products/listar');
    }

    cadastrarProduto(produto: any): Observable<any> {
        return this.http.post('http://localhost:8080/api/v1/products/cadastrar', produto, { responseType: 'text' });
    }

    // FUTURA IMPLEMENTAÇÃO:
    // Método reservado para consulta individual do produto.
    // Exemplo futuro esperado:
    // getProductById(productId: number): Observable<ProductItem> { ... }
}
