import dbConnect from "@/utils/dbConnect";
import nodemailer from "nodemailer";
import Contact from "@/models/Contact";

export async function POST(req) {
    await dbConnect();

    const { name, email, message } = await req.json();

    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email
    const transporter = nodemailer.createTransport({
        service: "gmail", // Use your email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to yourself
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
        JSON.stringify({ message: "Message sent successfully!" }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        }
    );
}
