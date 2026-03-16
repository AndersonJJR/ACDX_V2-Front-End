// src/app/features/products/data/products.mock.ts
import { ProductCategory, ProductItem } from '../data/product.model';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  // DADOS FICTÍCIOS TEMPORÁRIOS:
  // Categorias criadas apenas para simular a navegação da tela.
  { id: 'all', name: 'Todos' },
  { id: 'food', name: 'Produtos alimentares' },
  { id: 'cleaning', name: 'Produtos de limpeza' },
  { id: 'personal-care', name: 'Cuidados pessoais' },
  { id: 'office', name: 'Escritório e utilidades' },
];

export const MOCK_PRODUCTS: ProductItem[] = [
  // DADOS FICTÍCIOS TEMPORÁRIOS:
  // Lista criada para ilustrar a vitrine de produtos do microempreendedor.
  {
    id: 1,
    name: 'Biscoito artesanal',
    categoryId: 'food',
    price: 12.5,
    description: 'Pacote com biscoitos caseiros embalados para pronta entrega.',
    imageUrl: null,
  },
  {
    id: 2,
    name: 'Detergente neutro',
    categoryId: 'cleaning',
    price: 5.9,
    description: 'Produto de limpeza de uso doméstico com fragrância suave.',
    imageUrl: null,
  },
  {
    id: 3,
    name: 'Sabonete líquido',
    categoryId: 'personal-care',
    price: 18.0,
    description: 'Sabonete líquido perfumado para uso diário.',
    imageUrl: null,
  },
  {
    id: 4,
    name: 'Caderno executivo',
    categoryId: 'office',
    price: 24.9,
    description: 'Caderno capa dura para anotações comerciais e operacionais.',
    imageUrl: null,
  },
  {
    id: 5,
    name: 'Doce de leite caseiro',
    categoryId: 'food',
    price: 16.0,
    description: 'Pote de doce de leite artesanal com fabricação local.',
    imageUrl: null,
  },
  {
    id: 6,
    name: 'Álcool perfumado',
    categoryId: 'cleaning',
    price: 11.5,
    description: 'Solução para limpeza com secagem rápida.',
    imageUrl: null,
  },
  {
    id: 7,
    name: 'Creme hidratante',
    categoryId: 'personal-care',
    price: 21.9,
    description: 'Hidratante corporal de rápida absorção.',
    imageUrl: null,
  },
  {
    id: 8,
    name: 'Kit etiquetas adesivas',
    categoryId: 'office',
    price: 8.9,
    description: 'Cartela de etiquetas para organização de estoque.',
    imageUrl: null,
  },
];
