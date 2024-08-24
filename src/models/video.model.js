import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema = new Schema({
    videofile:{
        type:String,//CLOUDniaRY URL
        required: true
    },
    thumnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    discreption:{
        type:String,
        required:true
    },
    durtion:{
        type:Number,
        required:true
    },
    view:{
        type:NUmber,
        default:0,
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    Owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

VideoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",VideoSchema)