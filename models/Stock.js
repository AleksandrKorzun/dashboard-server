import { model, Schema } from "mongoose";

const StockSchema = new Schema(
  {
    category: String,
    nameProduct: String,
    quantity: Number,
    price: Number,
    status: {
      type: String,
      enum: ["ordered", "in delivery", "in stock"],
      default: "sent",
    },
  },
  { timestamps: true }
);

const Stock = model("Stock", StockSchema);
export default Stock;
