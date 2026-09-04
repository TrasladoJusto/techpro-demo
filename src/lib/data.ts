import productsData from '@/data/products.json';

export interface ProductSpecs {
  longitudDeOnda: string;
  potencia: string;
  tamanoDelSpot: string;
  peso: string;
  dimensiones: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'diodo' | 'co2' | 'nd-yag' | 'terapia';
  applications: string[];
  priceReference: string;
  shortDescription: string;
  description: string;
  specs: ProductSpecs;
  features: string[];
  isFeatured: boolean;
  image: string;
}

const products = productsData as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured);
}

export function getUniqueCategories(): string[] {
  return Array.from(new Set(products.map((product) => product.category)));
}

export function getRelatedProducts(currentId: string, limit = 2): Product[] {
  return products
    .filter((product) => product.id !== currentId)
    .slice(0, limit);
}
