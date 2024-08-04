import {z} from "zod"

export const signUpSchema = z.object({
    email: z.string().email({message:"Invalid Email address"}),
    password: z.string().min(6,{message:"Password must be atlest 6 characters"})
})