import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce fast-changing values (like search inputs).
 * @param {any} value - The input value to debounce.
 * @param {number} delay - The timeout delay in milliseconds (default: 500ms).
 * @returns {any} - The debounced value.
 */
export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay finishes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};