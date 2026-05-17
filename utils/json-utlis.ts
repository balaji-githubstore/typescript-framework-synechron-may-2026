import fs from "fs";

const JSON_FILE = "test-data/data.json"

export class JsonUtils {
    public static getJson(key?: string): any {
        const data = JSON.parse(fs.readFileSync(JSON_FILE, "utf-8"))
        if (key === undefined) {
            return data;
        }
        return data[key]
    }   
}