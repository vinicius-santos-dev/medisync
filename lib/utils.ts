import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// FORMAT DATE TIME
export const formatDateTime = (date: Date | string, timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    // weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    year: "numeric", // numeric year (e.g., '2023')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false),
    timeZone: timeZone, // use the provided timezone
  };

  // const dateDayOptions: Intl.DateTimeFormatOptions = {
  //   weekday: "short", // abbreviated weekday name (e.g., 'Mon')
  //   year: "numeric", // numeric year (e.g., '2023')
  //   month: "2-digit", // abbreviated month name (e.g., 'Oct')
  //   day: "2-digit", // numeric day of the month (e.g., '25')
  //   timeZone: timeZone, // use the provided timezone
  // };

  // const dateOptions: Intl.DateTimeFormatOptions = {
  //   month: "short", // abbreviated month name (e.g., 'Oct')
  //   year: "numeric", // numeric year (e.g., '2023')
  //   day: "numeric", // numeric day of the month (e.g., '25')
  //   timeZone: timeZone, // use the provided timezone
  // };

  // const timeOptions: Intl.DateTimeFormatOptions = {
  //   hour: "numeric", // numeric hour (e.g., '8')
  //   minute: "numeric", // numeric minute (e.g., '30')
  //   hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  //   timeZone: timeZone, // use the provided timezone
  // };

  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return {
    dateTime: dateObj.toLocaleString('en-US', dateTimeOptions),
    dateDay: dateObj.toLocaleDateString('en-US', { ...dateTimeOptions, weekday: 'short' }),
    date: dateObj.toLocaleDateString('en-US', { month: 'short', year: 'numeric', day: 'numeric', timeZone }),
    time: dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone }),
  };
};

export function encryptKey(passkey: string) {
  return btoa(passkey);
}

export function decryptKey(passkey: string) {
  return atob(passkey);
}