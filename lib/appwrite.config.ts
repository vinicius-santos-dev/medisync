import * as sdk from "node-appwrite";

/**
 * Appwrite Configuration - Central configuration for Appwrite services and client initialization
 * 
 * Features:
 * - Environment variable management
 * - Appwrite client setup
 * - Service initialization
 */

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

/**
 * Appwrite Client Configuration
 * Initialize and configure Appwrite client with credentials
 */

const client = new sdk.Client();

client
  .setEndpoint(ENDPOINT!)
  .setProject(PROJECT_ID!)
  .setKey(API_KEY!);

/**
 * Appwrite Services
 * Initialize and export service instances
 */

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);