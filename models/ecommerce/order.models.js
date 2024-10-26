import mongoose from "mongoose";

const orderitemSchema = new mongoose.Schema({
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
  },
  quantity:{
    type:Number,
    required:true,
  }

});


const orderSchema = new mongoose.Schema({
  orderPrice:{
    type: String,
    required: true,

  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
  orderItems:{
    typre:[orderitemSchema]
  },
  address:{
    type:String,
    required : true,

  },
  status: {
    type:String,
    enum: ["Pending","Cancelled","deliverd"],
    default:"pending"
  }
},{timestamps:true});


export const Order = mongoose.model("Order",orderSchema);