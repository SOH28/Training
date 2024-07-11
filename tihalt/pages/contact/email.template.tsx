import { Body, Html } from "@react-email/components";
import * as React from "react";

interface EmailProps {
    name: string;
    sender: string;
    position: string;
    contact: string;
}

export const Email = ({ name, sender, contact, position }: EmailProps) => {
  /* return (
    <Html lang="en" dir="ltr">
        <Body>
        <p>Dear {name},</p>
    
        <p>Thank you for reaching out to us.</p>
        
        <p>We have received your request and our representative will be in touch with you shortly to assist you further. Your inquiry is important to us, and we are committed to providing you with the best possible service.</p>
        
        <p>If you have any additional information or questions in the meantime, please feel free to reply to this email.</p>
        
        <p>Thank you for your patience and understanding.</p>
        
        <p>Best regards,</p>
        
        <p>
        {sender}<br />
        {position}<br />
        SentientGeeks<br />
        {contact}<br />
        </p>
        </Body>
    </Html>
  ); */
  return (
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Confirmation</title>
        </head>
        <body>
            <p>Dear ${name},</p>
    
            <p>Thank you for reaching out to us.</p>
    
            <p>We have received your request and our representative will be in touch with you shortly to assist you further. Your inquiry is important to us, and we are committed to providing you with the best possible service.</p>
    
            <p>If you have any additional information or questions in the meantime, please feel free to reply to this email.</p>
    
            <p>Thank you for your patience and understanding.</p>
    
            <p>Best regards,</p>
    
            <p>${sender}<br>
            ${position}<br>
            Sentient Geeks<br>
            ${contact}</p>
        </body>
    </html>`
  )
}
