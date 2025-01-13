import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export interface FormattedDateTime {
  dateTime: string;
  dateDay: string;
  date: string;
  time: string;
}

// FORMAT DATE TIME
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
