import moment from "moment";
import Product from "../models/product.model.js";

export const deleteBlockedProducts = async () => {
  try {
    // Get the date one month ago
    const oneMonthAgo = moment().subtract(1, "months").toDate();

    // Perform deletion of blocked products that have a statusDate older than one month
    const deletedProducts = await Product.deleteMany({
      status: "blocked",
      statusDate: { $lt: oneMonthAgo },
    });

    // Log the count of deleted products
    if (deletedProducts.deletedCount > 0) {
      console.log(`${deletedProducts.deletedCount} blocked products deleted.`);
    } else {
      console.log("No blocked products found to delete.");
    }
  } catch (error) {
    console.error("Error deleting blocked products:", error); // More detailed logging
  }
};

