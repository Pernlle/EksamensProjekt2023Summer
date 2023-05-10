import express from 'express';
import {get, merge} from 'lodash';

import { getUserBySessionToken } from '../db/users'; 

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const sessionToken = req.cookies['PROJECTTHIS-AUTH'];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { id } = req.params;
    //as string er fordi at ts ikke ved at vi har lavet en merge på identity/existingUssre i isAuthenticated
    const currentUserId = get(req, 'identity._id') as string;

    if (!currentUserId) {
      return res.sendStatus(400);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }
    //hvis de to parametre ovenfor ikke bliver sendt, gå da videre (giv lov il dene handling der nu er igang)
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}