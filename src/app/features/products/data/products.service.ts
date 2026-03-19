import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin, map } from 'rxjs';
import { PRODUCT_CATEGORIES } from './products.mock';
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
        return forkJoin({
            ativos: this.http.get<ProductItem[]>('http://localhost:8080/api/v1/products/listar-ativos'),
            inativos: this.http.get<ProductItem[]>('http://localhost:8080/api/v1/products/listar-inativos')
        }).pipe(
            map(res => [...res.ativos, ...res.inativos])
        );
    }

    cadastrarProduto(produto: any): Observable<any> {
        return this.http.post('http://localhost:8080/api/v1/products/cadastrar', produto);
    }

    atualizarProduto(id: number, produto: any): Observable<any> {
        return this.http.put(`http://localhost:8080/api/v1/products/atualizar/${id}`, produto);
    }

    desabilitarProduto(id: number): Observable<any> {
        return this.http.put(`http://localhost:8080/api/v1/products/${id}/desabilitar`, {});
    }

    excluirProduto(id: number): Observable<any> {
        return this.http.delete(`http://localhost:8080/api/v1/products/${id}`);
    }

    uploadProductImage(productId: number, file: File): Observable<any> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(`http://localhost:8080/api/v1/products/${productId}/imagem`, formData);
    }
}
