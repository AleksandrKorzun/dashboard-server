import express from "express";
import {
  getCustomers,
  getProducts,
  getProductById,
  setProduct,
  getTransactions,
  getGeography,
  deleteProduct,
  getOrders,
  setOrders,
  updateProductById,
  updateOrderById,
  getExpenses,
  setExpense,
  getStock,
  setStock,
  updateStockById,
  getCategory,
  getCategoryById,
  setCategory,
  updateCategoryById,
} from "../controllers/client.js";
import ctrlWrapper from "../middleWares/ctrlWrapper.js";
import upload from "../middleWares/upload.js";
const router = express.Router();

router.get("/products", ctrlWrapper(getProducts));
router.get("/products/:id", ctrlWrapper(getProductById));
router.patch("/products/:id", ctrlWrapper(updateProductById));
router.post("/products", upload.single("photo"), ctrlWrapper(setProduct));
router.delete("/products/:id", ctrlWrapper(deleteProduct));

router.get("/customers", ctrlWrapper(getCustomers));

router.get("/orders", ctrlWrapper(getOrders));
router.post("/orders", ctrlWrapper(setOrders));
router.patch("/orders", ctrlWrapper(updateOrderById));

router.get("/expenses", ctrlWrapper(getExpenses));
router.post("/expenses", ctrlWrapper(setExpense));
// router.patch("/expenses", ctrlWrapper(updateExpensesById));

router.get("/stock", ctrlWrapper(getStock));
router.post("/stock", ctrlWrapper(setStock));
router.patch("/stock", ctrlWrapper(updateStockById));

router.get("/category", ctrlWrapper(getCategory));
router.get("/category/:id", ctrlWrapper(getCategoryById));
router.post("/category", upload.single("photo"), ctrlWrapper(setCategory));
router.patch("/category/:id", ctrlWrapper(updateCategoryById));

router.get("/transactions", ctrlWrapper(getTransactions));

router.get("/geography", ctrlWrapper(getGeography));
export default router;
