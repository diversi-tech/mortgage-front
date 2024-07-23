import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { AlignmentType, Document, ImageRun, Packer, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from 'docx';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent {
  loanAmount?: number;
  loanTerm?: number;
  interestRate?: number;
  paymentsMade?: number; // מספר התשלומים שבוצעו
  years: number[] = [10, 15, 20, 25, 30];
  results: boolean = false;
  plans: any[] = [];
  remainingAmount?: number;
  displayedColumns: string[] = ['type', 'loanAmount', 'term', 'interestRate', 'firstPayment', 'totalAmount', 'totalInterestRate'];

  calculate() {
    this.results = true;
    this.plans = this.calculatePlans(this.loanAmount!, this.loanTerm!, this.interestRate!);
    this.remainingAmount = this.calculateRemainingAmount(this.loanAmount!, this.loanTerm!, this.interestRate!, this.paymentsMade!);
  }

  calculatePlans(amount: number, term: number, rate: number) {
    return [
      {
        type: 'סל אחיד 1',
        loanAmount: amount,
        term: term * 12,
        interestRate: rate,
        firstPayment: this.calculateMonthlyPayment(amount, term, rate),
        totalAmount: this.calculateTotalPayment(amount, term, rate),
        totalInterestRate: rate
      },
      // הוסף תמהילים נוספים כאן
    ];
  }

  calculateMonthlyPayment(amount: number, term: number, rate: number): number {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
    return Number((amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments))).toFixed(2));
  }

  calculateTotalPayment(amount: number, term: number, rate: number): string {
    return (this.calculateMonthlyPayment(amount, term, rate) * term * 12).toFixed(2);
  }

  calculateRemainingAmount(amount: number, term: number, rate: number, paymentsMade: number): number {
    const monthlyPayment = this.calculateMonthlyPayment(amount, term, rate);
    const remainingPayments = (term * 12) - paymentsMade;
    return monthlyPayment * remainingPayments;
  }

  async download() {
    const logoUrl = 'assets/logo.png';
    const response = await fetch(logoUrl);
    const logoBlob = await response.blob();
    const logoArrayBuffer = await logoBlob.arrayBuffer();
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new ImageRun({
                  data: logoArrayBuffer,
                  transformation: {
                    width: 100,
                    height: 80,
                  },
                  floating: {
                    horizontalPosition: {
                      offset: 6000000, // Move to the right side
                    },
                    verticalPosition: {
                      offset: 300000,
                    },
                  },
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'תוצאות חישוב המשכנתא',
                  bold: true,
                  size: 28,
                  // alignment: AlignmentType.CENTER
                }),
              ],
            }),
            this.generateTable(),
            new Paragraph({
              children: [
                new TextRun({
                  text: `נותרו להשלמת סכום המשכנתא: ${this.remainingAmount} ₪`,
                  size: 24,
                  bold: true,
                }),
              ],
              alignment: AlignmentType.CENTER
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'mortgage-calculation.docx');
    });
  }

  generateTable() {
    const rows = [];

    // Table Header
    rows.push(
      new TableRow({
        children: [
          new TableCell({ children: [new Paragraph('תמהיל ההלוואה')], width: { size: 15, type: WidthType.PERCENTAGE } }),
          new TableCell({ children: [new Paragraph('סכום הלוואה')], width: { size: 15, type: WidthType.PERCENTAGE } }),
          new TableCell({ children: [new Paragraph('תקופת הלוואה')], width: { size: 15, type: WidthType.PERCENTAGE } }),
          new TableCell({ children: [new Paragraph('אחוז ריבית')], width: { size: 15, type: WidthType.PERCENTAGE } }),
          new TableCell({ children: [new Paragraph('סכום החזר חודשי ראשון')], width: { size: 20, type: WidthType.PERCENTAGE } }),
          new TableCell({ children: [new Paragraph('סך כל הסכום הצפוי')], width: { size: 10, type: WidthType.PERCENTAGE } }),
          new TableCell({ children: [new Paragraph('הריבית הכוללת')], width: { size: 10, type: WidthType.PERCENTAGE } }),
        ],
      })
    );

    // Table Data
    this.plans.forEach(plan => {
      rows.push(
        new TableRow({
          children: [
            new TableCell({ children: [new Paragraph(plan.type)], width: { size: 15, type: WidthType.PERCENTAGE } }),
            new TableCell({ children: [new Paragraph(`${plan.loanAmount} ₪`)], width: { size: 15, type: WidthType.PERCENTAGE } }),
            new TableCell({ children: [new Paragraph(`${plan.term} חודשים`)], width: { size: 15, type: WidthType.PERCENTAGE } }),
            new TableCell({ children: [new Paragraph(`${plan.interestRate}%`)], width: { size: 15, type: WidthType.PERCENTAGE } }),
            new TableCell({ children: [new Paragraph(`${plan.firstPayment} ₪`)], width: { size: 20, type: WidthType.PERCENTAGE } }),
            new TableCell({ children: [new Paragraph(`${plan.totalAmount} ₪`)], width: { size: 10, type: WidthType.PERCENTAGE } }),
            new TableCell({ children: [new Paragraph(`${plan.totalInterestRate}%`)], width: { size: 10, type: WidthType.PERCENTAGE } }),
          ],
        })
      );
    });

    return new Table({
      rows: rows,
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      alignment: AlignmentType.CENTER
    });
  }
}
