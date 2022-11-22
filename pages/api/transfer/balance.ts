import { NextApiRequest, NextApiResponse } from "next";
import setupDB from "../../../database";
import { User, UserData } from "../../../types";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = await setupDB<UserData>('users');
    db.data ||= { users: [] }

    const { username, recipient, amount } = req.body;
    if (!username || !amount) {
        res.statusCode = 503
        res.send({ statusCode: res.statusCode, message: `Recipient or amount cannot be blank` })
    }
    const userLookup = db.data?.users.find(
        (user) =>
            user.username === username
    );

    const recipientLookup = db.data?.users.find(
        (user) =>
            user.username === recipient
    );

    if (!userLookup) {
        res.statusCode = 400;
        res.send({ statusCode: res.statusCode, message: `Cannot find user: ${username} to transfer from` });
    }

    if (!recipientLookup) {
        res.statusCode = 400;
        res.send({ statusCode: res.statusCode, message: `Cannot find user: ${recipient} to transfer to` });
    }

    if (db.data.users[recipient].balance < amount) {
        res.statusCode = 400;
        res.send({ statusCode: res.statusCode, message: `Your balance is too low!` });
    }

    if (db.data.users[username].balance >= amount) {
        db.data.users[recipient].balance += amount
        db.data.users[username].balance -= amount
        db.write()
        res.statusCode = 201
        res.send({ statusCode: res.statusCode, message: `Succesfully transferred ${amount} to ${username}` })
    }
}
