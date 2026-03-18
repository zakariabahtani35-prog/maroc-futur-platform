import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const theme = {
  colors: {
    primary: '#C1121F',
    secondary: '#0B7A3B',
    accent: '#22A559',
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
    },
    border: '#E5E5E5',
  }
};
