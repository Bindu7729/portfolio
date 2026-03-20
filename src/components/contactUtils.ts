import { personalInfo } from '../data/portfolioData';

export interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

export const validateContactInput = (
  input: ContactFormInput,
): { valid: boolean; errors: Partial<Record<keyof ContactFormInput, string>> } => {
  const errors: Partial<Record<keyof ContactFormInput, string>> = {};

  if (!input.name.trim()) {
    errors.name = "Name is required";
  }

  if (!input.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    errors.email = "Invalid email format";
  }

  if (!input.message.trim()) {
    errors.message = "Message is required";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

export const buildMailtoUrl = (
  input: ContactFormInput,
  recipient = personalInfo.email,
): string => {
  const subject = encodeURIComponent(`Portfolio contact from ${input.name.trim()}`);
  const body = encodeURIComponent(`${input.message.trim()}\n\nReply to: ${input.email.trim()}`);
  return `mailto:${recipient}?subject=${subject}&body=${body}`;
};
