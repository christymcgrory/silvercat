import { UserData } from "../types";

// Opt to use local db package 'lowdb' for dev speed. below is setup
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { LowSync, JSONFileSync } from "lowdb";
import { read } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const setupDB = async <T>(table: string) => {
    const file = join(__dirname, `${table}.json`);
    const adapter = new JSONFileSync<T>(file);
    const db = new LowSync(adapter);
    db.read();
    return db;
}

export default setupDB

