import mongoose from "mongoose";

const ExpensesSchema = new mongoose.Schema(
  {
    reason: {
        type: String,
        enum: ["Goods", "Marketing", "Delivery", "guarantee", "Investment", "Customs", "Other"],
      },
    description: String,
    price: Number,
  },
  { timestamps: true }
);

const Expenses = mongoose.model("Expenses", ExpensesSchema);
export default Expenses;