export function validateEmail(email: string): boolean {
  // Enhanced email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isRateLimited(lastEmailSent: string | null): boolean {
  if (!lastEmailSent) return false;
  
  const now = new Date();
  const lastSent = new Date(lastEmailSent);
  const timeDiff = now.getTime() - lastSent.getTime();
  const hoursDiff = timeDiff / (1000 * 60 * 60);
  
  return hoursDiff < 24;
}

export function formatError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}