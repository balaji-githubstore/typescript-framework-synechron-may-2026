import XLSX from "xlsx"
import { EXCEL_FILE } from "../config.js"

export class ExcelUtils {
    public static readExcel(sheetname: string): any {

        // load workbook 
        const workbook = XLSX.readFile(EXCEL_FILE);
        //get sheet
        const sheet = workbook.Sheets[sheetname];
        if (!sheet) {
            throw new Error(`sheet not found sheet for {sheetname}`)
        }
        const data = XLSX.utils.sheet_to_json(sheet, { defval: "" })
        return data;
    }
}