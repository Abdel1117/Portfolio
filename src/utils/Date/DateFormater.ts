/**
 * Gets the current year as a number.
 * 
 * @returns {number} The current year (e.g., 2024)
 * 
 * @example
 * ```typescript
 * const year = getCurrentYear();
 * console.log(year); // 2024
 * ```
 */
export function getCurrentYear(): number {
    return new Date().getFullYear();
}