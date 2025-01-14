/**
 * Utility Functions - Central location for commonly used utility functions
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind CSS classes with proper precedence
 * @param inputs - Class names to combine
 * @returns Combined class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Serializes and deserializes data to remove non-JSON properties
 * Used for Appwrite response cleaning
 * @param value - Data to process
 * @returns Clean JavaScript object
 */
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

/**
 * Converts File object to URL for preview
 * @param file - File to convert
 * @returns Object URL
 */
export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

/**
 * Formats date and time with timezone support
 * @param date - Date to format
 * @param timeZone - Target timezone (defaults to UTC)
 * @returns Object with formatted date strings
 */
export const formatDateTime = (date: Date | string, timeZone: string = 'UTC') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric", 
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone,
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone,
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone,
  };

  return {
    dateTime: new Intl.DateTimeFormat('en-US', dateTimeOptions).format(dateObj),
    dateDay: new Intl.DateTimeFormat('en-US', { ...dateTimeOptions, weekday: 'short' }).format(dateObj),
    date: new Intl.DateTimeFormat('en-US', dateOptions).format(dateObj),
    time: new Intl.DateTimeFormat('en-US', timeOptions).format(dateObj)
  };
};

export function encryptKey(passkey: string) {
  return btoa(passkey);
}

export function decryptKey(passkey: string) {
  return atob(passkey);
}
