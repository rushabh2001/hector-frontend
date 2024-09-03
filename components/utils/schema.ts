import * as z from "zod";

export const commentSchema = z.object({
  user_name: z.string().min(1, "Username is required"),
  user_email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  comment: z.string().min(1, "Comment is required"),
});

export const demoBookingSchema = z.object({
  first_name: z
    .string()
    .max(255, "First Name must be at most 255 characters")
    .min(1, "First Name is required"),
  last_name: z
    .string()
    .max(255, "Last Name must be at most 255 characters")
    .min(1, "Last Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be at most 255 characters"),
  country_name: z
    .string()
    .max(255, "Country Name must be at most 255 characters")
    .min(1, "Country Name is required"),
  company_name: z
    .string()
    .max(255, "Company Name must be at most 255 characters")
    .min(1, "Company Name is required"),
  monthly_ad_spend: z
    .string()
    .max(9999999999.99)
    .min(1, "Monthly Ad Spend is required"),
  amazon_brand_store_url: z
    .string()
    .url("Please enter a valid URL")
    .max(255, "Amazon Brand Store URL must be at most 255 characters")
    .min(1, "Amazon Brand Store URL is required"),
  contact_number: z.string().max(20).min(1, "Contact Number is required"),
});
