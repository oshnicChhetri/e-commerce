import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    cartItems: [
      {
        quantitty: {
          type: Number,
          default: 1,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
    userRole: {
      type: String,
      enum: ["customer", "admin"],
      defaut: "customer",
    },

    userPayPal: {
        type: String,
        trim: true,
        
      
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;