// src/app/features/products/data/product.models.ts
export interface ProductCategory {
  id: string;
  name: string;
}

export interface ProductItem {
  id: number;
  name: string;
  categoryId: string;
  price: number;
  description: string;

  // DEMONSTRAÇÃO:
  // Campo preparado para receber a URL da imagem do produto no futuro.
  // Exemplo real posterior: http://localhost:8080/api/files/products/1/image
  imageUrl?: string | null;
}
