import { NextApiRequest, NextApiResponse } from "next";
import setupDB from "../../../database";
import { UserData } from "../../../types";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await setupDB<UserData>('users');
  db.data ||= { users: [] }
  const userLogin = req.body.user;
  const userLookup = db.data?.users.find(
    (user) =>
      user.password === userLogin.password &&
      user.username === userLogin.username
  );
  if (!userLookup) {
    res.statusCode = 404;
    res.send({ statusCode: res.statusCode, message: "404: User not found" });
  }
}
