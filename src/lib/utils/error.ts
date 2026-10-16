export function getErrorMessage(err: unknown, fallback: string = 'Terjadi kendala pada sistem.'): string {
  if (err instanceof Error) {
    return err.message;
  }
  if (typeof err === 'string') {
    return err;
  }
  return fallback;
}
