import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    products: {
        type: Array,
        default: [],
      },
    photo: String,
    quantityAllProducts: {
        type: Number,
        default: 0,
      },
    soldAllProducts: {
        type: Number,
        default: 0,
      },
    stockAllProducts: {
        type: Number,
        default: 0,
      },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);
export default Category;