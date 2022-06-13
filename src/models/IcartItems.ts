import Iproducts from './Iproducts';

interface IcartItems extends Iproducts {
  brandName: string,
  count: number
}

export default IcartItems;
