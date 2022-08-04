import { dbConnect } from '../dbConnect';
import Category from '../models/categoryModel';

export async function getAllCategories() {
  await dbConnect();

  const categories = await Category.find();

  return categories.map(({ id, name, description }) => {
    return { id, name, description };
  });
}

export async function getCategoryById(id_) {
  await dbConnect();

  const category = await Category.findById(id_);

  const { id, name, description } = category;

  return { id, name, description };
}
