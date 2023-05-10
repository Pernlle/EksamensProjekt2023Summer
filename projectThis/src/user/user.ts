//objekt user
export interface User {
    id: number;
    dateCreated: number;
    username: string;
    password: string;
}

//sessions objekt - user objekt uden det sensitive password - med issued og expires timestamps (This Session object is what gets serialized into a JSON Web Token.)
export interface Session {
    id: number;
    dateCreated: number;
    username: string;
    /**
     * Timestamp indicating when the session was created, in Unix milliseconds.
     */
    issued: number;
    /**
     * Timestamp indicating when the session should expire, in Unix milliseconds.
     */ 
    expires: number;
}

/**
 * Identical to the Session type, but without the `issued` and `expires` properties. (encode funktionen klarer selv timestamps)
 */
export type PartialSession = Omit<Session, "issued" | "expires">;

//interface, som reprecenterer JWT encoding sessionen
export interface EncodeResult {
    token: string,
    expires: number,
    issued: number
}

//resultater for parsing
export type DecodeResult =
    | {
          type: "valid";
          session: Session;
      }
    | {
          type: "integrity-error";
      }
    | {
          type: "invalid-token";
      };

      //udløbs status --> 'grace' er hvor den automatisk kan blive genlavet af serveren
export type ExpirationStatus = "expired" | "active" | "grace";