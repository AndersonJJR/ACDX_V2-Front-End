// src/app/features/products/data/products.mock.ts
import { ProductCategory, ProductItem } from '../data/product.model';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: 'all', name: 'Todos' },
  { id: 'PRODUTOS_ALIMENTARES', name: 'Produtos alimentares' },
  { id: 'PRODUTOS_DE_LIMPEZA', name: 'Produtos de limpeza' },
  { id: 'CUIDADOS_PESSOAIS', name: 'Cuidados pessoais' },
  { id: 'ESCRITORIO_E_UTILIDADES', name: 'Escritório e utilidades' },
  { id: 'inativos', name: 'Inativos' },
];

export const MOCK_PRODUCTS: ProductItem[] = [
  // A lista agora é buscada no back-end. Mantendo variável apenas caso seja necessária nos testes.
];
