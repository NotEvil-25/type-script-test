interface Iproducts {
  type: string,
  id: number,
  sku: string,
  title: string,
  regular_price: {
    currency: string,
    value: number
  },
  image: string,
  brand: number,
}

export default Iproducts;
