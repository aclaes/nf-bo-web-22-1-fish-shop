import { dbConnect } from '../dbConnect';
import Product from '../models/productModel';

export async function getAllProducts() {
  await dbConnect();

  const products = await Product.find().populate('category');

  return products.map(({ id, name, description, price, category }) => {
    return {
      id,
      name,
      description,
      price,
      category: {
        id: category.id,
        name: category.name,
        description: category.description,
      },
    };
  });
}

export async function getProductById(id_) {
  await dbConnect();

  const product = await Product.findById(id_).populate('category');

  const { id, name, description, price, category } = product;

  return {
    id,
    name,
    description,
    price,
    category: category.name,
    categoryId: category.id,
  };
}
