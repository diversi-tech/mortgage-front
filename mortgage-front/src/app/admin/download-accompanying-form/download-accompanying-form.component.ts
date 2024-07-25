import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun, ImageRun, Table, TableCell, TableRow, WidthType, AlignmentType, VerticalAlign, Header, Footer, PageSize } from 'docx';
import { customerService } from '../../shared/Services/costumer.service';
import { switchMap } from 'rxjs';
import { Customer } from '../../shared/Models/Customer';

@Component({
  selector: 'app-download-accompanying-form',
  templateUrl: './download-accompanying-form.component.html',
  styleUrls: ['./download-accompanying-form.component.css']
})
export class DownloadAccompanyingFormComponent implements OnInit {
  @Input()
  customerId: number=0;
  customer?:Customer;

  constructor(private route: ActivatedRoute, private customerService: customerService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        // this.customerId = +params.get('id')!;
        return this.customerService.getCustomers(); 
      })
    ).subscribe(customers => {
      this.customer = this.customerService.getCustomerById(this.customerId);
      console.log(this.customer); 
    });
  }

  async download() {
    const logoUrl = 'assets/logo1.png';
    const response = await fetch(logoUrl);
    const logoBlob = await response.blob();
    const logoArrayBuffer = await logoBlob.arrayBuffer();
    const logoUrl1 = 'assets/logo.png';
    const response1 = await fetch(logoUrl1);
    const logoBlob1 = await response1.blob();
    const logoArrayBuffer1 = await logoBlob1.arrayBuffer();
    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 72,
                right: 720,
                bottom: 0,
                left: 720
                },
                
                }
          },
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  children: [
                    new ImageRun({
                      data: logoArrayBuffer,
                      transformation: { width: 900, height: 750 },
                      floating: {
                        horizontalPosition: { offset: 1000 },
                        verticalPosition: { offset: 1250000},
                      },
                    }),
                  ],
                }),
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text:"       ז'בוטינסקי 71 בני ברק  🏠   |     m0548492564@gmail.com 📩    |     054-8492564 📞 ",
                      bold: true,
                      color: 'FFFFFF',
                      size:25,
                      font:'EFT_NewLetter'
                    }),
                  ],
                  style:'fdf',
                  alignment: AlignmentType.CENTER,
                  shading: {
                    type: 'clear',
                    fill: '#000428',
                  },
                  spacing: {
                    before: 200,
                  },
                }),
              ],
            }),
          },
          children: [
            new Paragraph({
              children: [
                new ImageRun({
                  data: logoArrayBuffer1,
                  transformation: { width: 250, height: 250 },
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'טופס נלווה למשכנתא',
                  bold: true,
                  size: 70,
                  font: "David",                 
                  underline: {},
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: {
                after: 300,
              },
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'פרטי המלווים ',
                  bold: true,
                  size: 50,
                  font: "David",                 
                  underline: {},
                }),
              ],
              alignment: AlignmentType.LEFT,
              spacing: {
                after: 300,
              },
            }),
            this.generateCustomerTable(),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, `${this.customerId}_accompanying-form.docx`);
    });
  }

  generateCustomerTable() {
    return new Table({
      rows: [
        
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: `${this.customer?.first_Name} ${this.customer?.last_Name}`,
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 85, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: 'שם',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 15, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: this.customer?.t_z||'',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 85, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: "מס' ת.ז",
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 15, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: this.customer?.job_description || '',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 85, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: 'עיסוק',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 15, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: this.customer?.work_business_name||'',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 85, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: 'מקום עבודה',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 15, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: (this.customer?.['avarage_monthly_salary'])?.toString() || '',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 85, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: 'משכורת / הכנסה חודשית נטו',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 50, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text:(this.customer!.income_Government_Endorsement! + this.customer!.income_other!+this.customer!.income_rent!).toString()||'10',
                    // text: (this.customer.abstractvarage_monthly_salary + (this.customer.income_Government_Endorsement || 0)).toString() || '',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 85, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: 'סה"כ הכנסה + קצבת ילדים',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 15, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: this.customer?.address||'',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 85, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: "כתובת",
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 15, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: this.customer?.birthDate?.toString(),
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 85, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: "תאריך לידה",
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 15, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: this.customer?.email||'',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 85, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: "אימייל",
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 15, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: this.customer?.t_z||'',
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 85, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: "מס' ת.ז",
                    size: 27,
                    font: "David", 
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 15, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: this.customer?.phone||'',
                    size: 27,// גודל גופן
                    font: "David", // גופן
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 85, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
            new TableCell({
              children: [new Paragraph({
                children: [
                  new TextRun({
                    text: "מס' טלפון",
                    size: 27,// גודל גופן
                    font: "David", // גופן
                  }),
                ],
              })],
              verticalAlign: VerticalAlign.CENTER,
              width: { size: 15, type: WidthType.PERCENTAGE },
              margins: { bottom: 300 }
            }),
          ],
        }),
        // הוסף שדות נוספים לפי הצורך
      ],
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      alignment: AlignmentType.CENTER,
    });
  }
}  