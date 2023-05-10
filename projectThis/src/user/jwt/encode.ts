import { encode, TAlgorithm } from "jwt-simple";
import { EncodeResult, PartialSession, Session } from "../user";
//serialize a session objet into JWT-token
//Funktionen som implementerer JWT-tokens som indeholder expiration time - der bestemmes her.
export function encodeSession(
  secretKey: string,
  partialSession: PartialSession
): EncodeResult {
  // Always use HS512 to sign the token
  const algorithm: TAlgorithm = "HS512";
  // Determine when the token should expire - Dette gøres ved at tage issued tiden og sætte 15 min på (hvis 15 min er den ønskede tid)
  const issued = Date.now();
  //Da compileren arbejder i ms, omregnes de 15 minutter til ms ved at gange med 60 for sekunder og hherefter 1000 for ms
  const fifteenMinutesInMs = 15 * 60 * 1000;
  const expires = issued + fifteenMinutesInMs;
  const session: Session = {
    ...partialSession,
    issued: issued,
    expires: expires,
  };

  return {
    token: encode(session, secretKey, algorithm),
    issued: issued,
    expires: expires,
  };
}
