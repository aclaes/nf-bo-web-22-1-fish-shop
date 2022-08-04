import mongoose from 'mongoose';
import './categoryModel';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
});

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
