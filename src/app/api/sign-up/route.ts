import dbConnect from "@/lib/dbConnect";
import { sendVerificationEmail } from "@/lib/sendVerificationEmail";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
    await dbConnect()

    try {
        const { fullName, email, password, phone } = await request.json()
        //    const existingUserByEmail = await UserModel.findOne({
        //         email,
        //         isVerified:true
        //     })

        //     if (existingUserByEmail) {
        //         return Response.json(
        //             {
        //                 success:false,
        //                 mmessage:"Email is already used"
        //             },{status:500}
        //         )
        //     }

        const existingUserByEmail = await UserModel.findOne({ email })
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()

        if (existingUserByEmail) {
            if (existingUserByEmail.isVerified) {
                return Response.json(
                    {
                        success: false,
                        mmessage:"User already exist with this email"
                    }, { status: 400 }
                )
            }else{
                const hashPassword =  await bcrypt.hash(password,10)
                existingUserByEmail.password = hashPassword;
                existingUserByEmail.verifyCode = verifyCode;
                existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000)
                await existingUserByEmail.save()
            }
        } else {
            const hashPassword = bcrypt.hash(password, 10)
            const expiryDate = new Date()
            expiryDate.setHours(expiryDate.getHours() + 1)

            const newUser = new UserModel({
                email,
                password: hashPassword,
                fullName,
                phone,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false
            })

            await newUser.save()
        }

        //send verification email
        const emailResponse = await sendVerificationEmail(
            email,
            fullName,
            verifyCode
        )

        if (!emailResponse.success) {
            return Response.json(
                {
                    success: false,
                    mmessage: emailResponse.message
                }, { status: 500 }
            )
        }

        return Response.json(
            {
                success: true,
                mmessage: "User registered successfully. Plese verify your email"
            }, { status: 201 }
        )

    } catch (error) {
        console.error("Error registering user", error)
        return Response.json(
            {
                success: false,
                mmessage: "Error registering User"
            }, { status: 500 }
        )
    }
}