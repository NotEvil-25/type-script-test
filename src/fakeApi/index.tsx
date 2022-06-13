/* eslint-disable @typescript-eslint/no-unused-vars */
import products from '../data/products.json';
import brands from '../data/brands.json';

async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(products); }, 3000);
  });
}

async function getBrands() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(brands); }, 3000);
  });
}

export { getProducts, getBrands };
