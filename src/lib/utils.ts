import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function processResumeExperienceBullet(input: string): string {
  let output = "";
  let flag = false;
  for (const c of input) {
    if (c === '*') {
      if (flag) {
        output += "</b>"
        flag = false;
      } else {
        output += "<b>"
        flag = true;
      }
    } else {
      output += c
    }
  }
  return output
}
