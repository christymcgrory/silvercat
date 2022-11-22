import { NextApiRequest, NextApiResponse } from "next";
import { UserInfo } from "node:os";
import setupDB from "../../../database";
import { User, UserData } from "../../../types";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = await setupDB<UserData>('users');
    db.data ||= { users: [] }

    console.log(typeof req.body)
    const { password, username } = req.body;
    if (!username || !password) {
        res.statusCode = 503
        res.send({ statusCode: res.statusCode, message: `Username or password cannot be blank` })
    }
    const userLookup = db.data?.users.filter(
        (user) =>
            user.password === password &&
            user.username === username
    );

    if (userLookup.length > 0) {
        console.log('test')
        res.statusCode = 400;
        res.send({ statusCode: res.statusCode, message: `User with name: ${username} already exists` });
    }

    if (username !== '' && password.length >= 3) {
        db.data.users.push({
            username: username,
            password: password,
            balance: 100,
        })
        db.write()
        res.statusCode = 201
        res.send({ statusCode: res.statusCode, message: `User ${username} successfully created` })
    }
    // I would add more validity checking and sanitise inputs here
}
