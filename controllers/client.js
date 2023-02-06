import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Transaction from "../models/Transaction.js";
import User from "../models/User.js";
import getCountryIso3 from "country-iso-2-to-3";
import Order from "../models/Order.js";
import Expenses from "../models/Expenses.js";
import Stock from "../models/Stock.js";
import Category from "../models/Category.js";

export const getProducts = async (req, res) => {
  const products = await Product.find();
  const productsWithStats = await Promise.all(
    products.map(async (product) => {
      const stat = await ProductStat.find({
        productId: product._id,
      });
      return {
        ...product._doc,
        stat,
      };
    })
  );
  res.status(200).json(productsWithStats);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.find({ _id: id });
  res.json(product);
};

export const setProduct = async (req, res) => {
  const newProduct = await Product.create({
    ...req.body,
    photo: req.file.filename,
  });
  res.status(201).json(newProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.find({ _id: id });
  // if (!product) {
  //     return res.status(401).json({
  //         Status: "401 Unauthorized",
  //         ResponseBody: {
  //         "message": "Email or password is wrong"
  //         }
  //     })
  // }

  const products = await Product.findByIdAndRemove(id);
  if (products) {
    res.json({
      message: "Product deleted",
    });
  } else {
    res.status(404).json({
      message: "Not found",
    });
  }
};

export const updateProductById = async (req, res) => {
  // const {error} = joiContactSchema.validate(req.body);
  // if(error){
  //     return res.status(400).json({message: "Bad Request"})
  // }
  const { id } = req.params;
  // const product = await Product.findOne({_id: id});
  // if (!product) {
  //     return res.status(401).json({
  //         Status: "401 Unauthorized",
  //         ResponseBody: {
  //         "message": "Email or password is wrong"
  //         }
  //     })
  // }
  const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updateProduct) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(updateProduct);
};

export const getCategory = async (req, res) => {
  const categories = await Category.find();
  // const productsWithStats = await Promise.all(
  //   products.map(async (product) => {
  //     const stat = await ProductStat.find({
  //       productId: product._id,
  //     });
  //     return {
  //       ...product._doc,
  //       stat,
  //     };
  //   })
  // );
  res.status(200).json(categories);
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const category = await Category.find({ _id: id });
  res.json(category);
};

export const setCategory = async (req, res) => {
  const newCategory = await Category.create({
    ...req.body,
    photo: req.file.filename,
  });
  res.status(201).json(newCategory);
};

// export const deleteCategory = async (req, res) => {
//   const { id } = req.params;
//   const product = await Product.find({ _id: id });
//   // if (!product) {
//   //     return res.status(401).json({
//   //         Status: "401 Unauthorized",
//   //         ResponseBody: {
//   //         "message": "Email or password is wrong"
//   //         }
//   //     })
//   // }

//   const products = await Product.findByIdAndRemove(id);
//   if (products) {
//     res.json({
//       message: "Product deleted",
//     });
//   } else {
//     res.status(404).json({
//       message: "Not found",
//     });
//   }
// };

export const updateCategoryById = async (req, res) => {
  const { id } = req.params;
  // const category = await Product.findOne({_id: id});
  // if (!product) {
  //     return res.status(401).json({
  //         Status: "401 Unauthorized",
  //         ResponseBody: {
  //         "message": "Email or password is wrong"
  //         }
  //     })
  // }
// console.log('______________________',id)
  const updateCategory = await Category.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updateCategory) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(updateCategory);
};



export const getCustomers = async (req, res) => {
  const customers = await User.find({ role: "user" }).select("-password");
  res.status(200).json(customers);
};

export const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.status(200).json(orders);
};

export const setOrders = async (req, res) => {
  const orders = await Order.create(req.body);
  res.status(201).json(orders);
};

export const updateOrderById = async (req, res) => {
  const {id, value} = req.body;
  const updateOrder = await Order.findByIdAndUpdate({_id: id}, {status: value}, {
    new: true,
  });
  if (!updateOrder) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(updateOrder);
};

export const getExpenses = async (req, res) => {
  const expenses = await Expenses.find();
  res.status(200).json(expenses);
} 
export const setExpense = async (req, res) => {
  const expenses = await Expenses.create(req.body);
  res.status(201).json(expenses);
}

export const getStock = async (req, res) => {
  const stock = await Stock.find();
  res.status(200).json(stock);
};

export const setStock = async (req, res) => {
  const stock = await Stock.create(req.body);
  res.status(201).json(stock);
};

export const updateStockById = async (req, res) => {
  // const {error} = joiContactSchema.validate(req.body);
  // if(error){
  //     return res.status(400).json({message: "Bad Request"})
  // }
  // const { id } = req.params;
  // const product = await Product.findOne({_id: id});
  // if (!product) {
  //     return res.status(401).json({
  //         Status: "401 Unauthorized",
  //         ResponseBody: {
  //         "message": "Email or password is wrong"
  //         }
  //     })
  // }
  const {id, value} = req.body;
  const updateStock = await Stock.findByIdAndUpdate({_id: id}, {status: value}, {
    new: true,
  });
  if (!updateStock) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.json(updateStock);
};

export const getTransactions = async (req, res) => {
  // sort should look like this: { "field": "userId", "sort": "desc"}
  const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

  // formatted sort should look like { userId: -1 }
  const generateSort = () => {
    const sortParsed = JSON.parse(sort);
    const sortFormatted = {
      [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
    };

    return sortFormatted;
  };
  const sortFormatted = Boolean(sort) ? generateSort() : {};

  const transactions = await Transaction.find({
    $or: [
      { cost: { $regex: new RegExp(search, "i") } },
      { userId: { $regex: new RegExp(search, "i") } },
    ],
  })
    .sort(sortFormatted)
    .skip(page * pageSize)
    .limit(pageSize);

  const total = await Transaction.countDocuments({
    name: { $regex: search, $options: "i" },
  });

  res.status(200).json({
    transactions,
    total,
  });
};

export const getGeography = async (req, res) => {
  const users = await User.find();

  const mappedLocations = users.reduce((acc, { country }) => {
    const countISO3 = getCountryIso3(country);
    if (!acc[countISO3]) {
      acc[countISO3] = 0;
    }
    acc[countISO3]++;
    return acc;
  }, {});

  const formattedLocations = Object.entries(mappedLocations).map(
    ([country, count]) => {
      return { id: country, value: count };
    }
  );

  res.status(200).json(formattedLocations);
};
