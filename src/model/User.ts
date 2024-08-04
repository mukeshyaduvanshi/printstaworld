import mongoose, {Schema, Document} from "mongoose";


export interface User extends Document{
    email:string;
    password:string;
    fullName:string;
    phone:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean;
}

const UserSchema: Schema<User> = new Schema({
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        match:[/.+\@.+\..+/, 'please use a valid email address']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    fullName:{
        type:String,
        required:[true,"Full Name is required"]
    },
    phone:{
        type:String,
        required:[true,"Phone No is required"]
    },
    verifyCode:{
        type:String,
        required:[true,'Verify code is required']
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,'Verify code Exprie is required']
    },
    isVerified:{
        type:Boolean,
        default:false
    }
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)

export default UserModel