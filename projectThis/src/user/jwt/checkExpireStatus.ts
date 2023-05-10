import { ExpirationStatus, Session } from "../user";
//check if deserilized session has expired
//checker for om expirestatus er valid/grace eller expired - hvis den er grace vil der automatisk blive lavet en ny token til brugeren
export function checkExpirationStatus(token: Session): ExpirationStatus {
  const now = Date.now();

  if (token.expires > now) return "active";

  // Find the timestamp for the end of the token's grace period (dette er 1/2 time, men kan også sagtens være 3 timer (3*60*60*1000))
  const halfHourInMs = 30 * 60 * 1000;
  const halfHourAfterExpiration = token.expires + halfHourInMs;

  if (halfHourAfterExpiration > now) return "grace";

  return "expired";
}
