import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    model: String,
    purchaseCost: Number,
    price: Number,
    description: String,
    category: String,
    photo: String,
    quantity: Number,
    videoReview: String,
    // rating: Number,
    // supply: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
