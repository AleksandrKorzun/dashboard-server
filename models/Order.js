import { model, Schema } from "mongoose";

const OrderSchema = new Schema({
  nameClient: String,
  phone: Number,
  city: String,
  region: String,
  nameProduct: String,
  price: Number,
  quantity: Number,
  total: Number,
  status: {
    type: String,
    enum: ["sent", "success", "cancel", "change", "return"],
    default: "sent",
  },
  
},
{ timestamps: true }
);

const Order = model("Order", OrderSchema);
export default Order;
