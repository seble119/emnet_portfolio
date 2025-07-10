"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    if (!firstName || !lastName || !email || !subject || !message) {
      throw new Error("All fields are required")
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["seble11994@gmail.com"], // Changed to your verified email
      subject: `Portfolio Contact: ${subject}`,
      html: `
  <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 20px;">
    <div style="background: linear-gradient(135deg, #0066cc 0%, #004499 100%); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
      <h2 style="color: white; margin: 0; font-size: 24px; text-align: center;">
        New Contact from Emnet's Economics Portfolio
      </h2>
    </div>
    
    <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <div style="background: #fee2e2; border: 1px solid #fecaca; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin: 0; color: #dc2626; font-weight: bold;">
          📧 This message should be forwarded to: emninat@gmail.com
        </p>
      </div>
      
      <h3 style="color: #0066cc; margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
        Contact Information
      </h3>
      <div style="margin: 20px 0;">
        <p style="margin: 8px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
      </div>
      
      <h3 style="color: #0066cc; margin-top: 30px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
        Message
      </h3>
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #0066cc;">
        <p style="line-height: 1.6; color: #374151; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
      </div>
      
      <div style="margin-top: 30px; padding: 20px; background: #eff6ff; border-radius: 8px; text-align: center;">
        <p style="margin: 0; color: #1e40af; font-weight: bold;">
          Reply to: <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
        </p>
      </div>
    </div>
    
    <div style="text-align: center; margin-top: 20px;">
      <p style="color: #6b7280; font-size: 12px;">
        This email was sent from Emnet Assefa's Economics Portfolio
      </p>
    </div>
  </div>
`,
      text: `
        New Contact from Economics Portfolio
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        Reply to: ${email}
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      throw new Error("Failed to send email")
    }

    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.error("Form submission error:", error)
    throw new Error("Failed to send message. Please try again.")
  }
}
