import React from 'react'
import excel from 'xlsx';

function ExcleSheet() {
    let fileName = "./src/newData.xlsx";
    let workbook = excel.readFile(fileName);
     console.log(workbook)
    return (
        <div>
            
        </div>
    )
}

export default ExcleSheet
//  import excel from 'xlsx';
// let fileName = "newData.xlsx";
// let workbook = excel.readFile(fileName);
// console.log(workbook)