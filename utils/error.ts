export const renderError = (error: unknown): { message: string } => {
  if (error instanceof Error) {
    return { message: error.message };
  }
  return { message: 'Coś poszło nie tak...' };
};
