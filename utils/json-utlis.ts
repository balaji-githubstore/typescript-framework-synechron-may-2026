import fs from "fs";

const JSON_FILE = "test-data/data.json"

export class JsonUtils {
    static getJson(key?: string): any {
        const data = JSON.parse(fs.readFileSync("test-data/newpet.json", "utf-8"))
        if (key === undefined) {
            return data;
        }
        return data[key]
    }
}