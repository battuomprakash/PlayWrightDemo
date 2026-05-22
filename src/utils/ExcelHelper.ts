// import xlsx plugin
import * as EXCEL from 'xlsx';
import fs from 'fs';
import path from 'path';

 
// Define test data structure
interface TestRecord {
    Skill1: string;
    Skill2: string;
}

// create method to read excel file
export function readExcelFile(filePath:string){

    //Read the excel file as binary string
     const file = fs.readFileSync(filePath);
    // parse into the workbook 
      const workbook = EXCEL.read(file);
    // get first sheet
     const sheet = workbook.Sheets[workbook.SheetNames[0]];
    // convert sheet into json
    const rawdata: any[] =EXCEL.utils.sheet_to_json(sheet,{header:1});
    // conert raw data into TestRecord
     const records : TestRecord[] = rawdata.slice(1).map((column: any)=>({
          Skill1 : column[0],
          Skill2 : column[1]
    }))
    return records;
}
