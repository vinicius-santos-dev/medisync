"use client"

import { useState, useEffect } from "react";

/**
 * Custom Hook: useTimezone
 *
 * Provides client-side timezone detection for date/time localization
 * 
 * Features:
 * - Detects user's local timezone
 * - Handles SSR by defaulting to UTC
 * - Updates timezone after component mount
 */
export const useTimezone = () => {
  const [timezone, setTimezone] = useState("UTC");

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return timezone;
};
