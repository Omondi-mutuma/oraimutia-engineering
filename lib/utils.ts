import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// utils/convertStringToNumber.js

export const convertStringToNumber = (str: string, defaultValue = NaN) => {
  const num = parseFloat(str);
  return isNaN(num) ? defaultValue : num;
};
