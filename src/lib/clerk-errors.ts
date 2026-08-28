export function getSSOErrorMessage(err: unknown): string {
  if (err && typeof err === "object") {
    if ("longMessage" in err && typeof err.longMessage === "string") return err.longMessage;
    if ("message" in err && typeof err.message === "string") return err.message;
  }
  return "Something went wrong, please try again.";
}
