import mongoose from "mongoose";
const categorySchema=new mongoose.Schema(
    {name:{type:String,required:true}
    },
    {
        versionKey:false,
        timeStamps:true
    }
)

const Category=mongoose.model("Category",categorySchema);
export default Category;
