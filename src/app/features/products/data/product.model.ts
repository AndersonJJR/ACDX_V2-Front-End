export interface ProductCategory {
  id: string;
  name: string;
}

export interface ProductItem {
  id?: number;
  nome: string;
  categoria: string;
  custo_unitario: number;
  descricao?: string;
  tempo_producao_minutos?: number;
  preco_sugerido?: number;
  imagemUrl?: string | null;
  ativo?: boolean;
}
