import { Injectable } from '@angular/core';
import FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
@Injectable({
    providedIn: 'root'
})
export class ExportToExcelService {
    headerMapping: any;
    exportToExcel(items: any, fileName: string, headers: any): void {
        this.headerMapping = headers;
        const translatedItems = items.map((item: { [x: string]: any; }) => {
            const translatedItem: { [key: string]: any } = {};
            for (const key in item) {
                if (this.headerMapping[key]) {
                    translatedItem[this.headerMapping[key]] = item[key];
                } else {
                    translatedItem[key] = item[key];
                }
            }
            return translatedItem;
        });
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(translatedItems);
        const workbook: XLSX.WorkBook = {
            Sheets: { 'data': worksheet },
            SheetNames: ['data']
        };
        const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, fileName || 'data');
    }
    private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(data, `${fileName}${new Date().getTime()}.xlsx`);
    }
}
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
