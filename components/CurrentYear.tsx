"use client";

/**
 * CurrentYear Component - Simple component that displays the current year dynamically
 */
const CurrentYear = () => {
  return <>{new Date().getFullYear()}</>;
};

export default CurrentYear;
