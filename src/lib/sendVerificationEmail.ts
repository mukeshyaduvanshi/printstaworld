import { resend } from "./resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    fullName:string,
    verifyCode:string

): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Printstaworld | Verification Code',
            react: VerificationEmail({fullName,otp:verifyCode}),
          });
        return{success:true,message:'Verification email send successfully'}
    } catch (emailError) {
        console.error("Error Sending verification email",emailError)
        return{success:false,message:'Failed to send verification email'}
    }
}