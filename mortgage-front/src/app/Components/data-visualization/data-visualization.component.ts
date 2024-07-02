import { Component, OnInit } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { customerService } from '../../services/costumer.service';
import { Customer } from '../../Models/Customer';
import { Subscription } from 'rxjs';
import { Lead } from '../../Models/Lead';
import { leadService } from '../../services/lead.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Document } from '../../Models/Document';
import { DocumentsListCustomerService } from '../../services/documentListCustomer.service';
import { DocumentType } from '../../Models/DocumentTypes.Model';
@Component({
  selector: 'app-data-visualization',
  standalone: true,
  imports: [CanvasJSAngularChartsModule, MatButtonModule,MatDividerModule,MatIconModule],
  templateUrl: './data-visualization.component.html',
  styleUrl: './data-visualization.component.scss'
})
export class DataVisualizationComponent implements OnInit { 

  constructor(private _serviceCustomer:customerService,private leadService:leadService,private documentService:DocumentsListCustomerService)
  {}
    customers:Customer[]=[];
     leads:Lead[]=[];
     documents:Document[]=[];
     documentTypes:DocumentType[]=[];
    chartOptions: any;
    private leadSubscription?: Subscription;
    ngOnInit(): void {
      this.createArrys();
    }
    createArrys():void{
      this._serviceCustomer.getCustomers().subscribe(customersRes => {
        this.customers = customersRes;
      })
      this.leadSubscription = this.leadService.leads$.subscribe({
        next: leads => {
          console.log('accept the changes');
          this.leads=leads;
        },
        error: error => {
          console.error('Error loading customers:', error);
        }
      });
      this.documentService.getAllDocuments().subscribe(documentRes=>
        {
            this.documents=documentRes;
        }
      )
      this.documentService.getAllDocumentType().subscribe(documentTypeRes=>
        {
            this.documentTypes=documentTypeRes;
        }
      )
      }
      getJobStatusCounts() {
        const counts = { employed: 0, SelfEmployed: 0 };
        this.customers.forEach(customer => {
          if (customer.job_Status === 0) counts.employed++;
          if (customer.job_Status === 1) counts.SelfEmployed++;
        });
        return counts;
      }
      
  getFamilyStatusCounts() {
     const counts = { single: 0, married: 0, divorced: 0, widow :0};
    this.customers.forEach(customer => {
      if (customer.family_status ===0) counts.married++;
      if (customer.family_status ===1 ) counts.single++;
      if (customer.family_status ===2) counts.divorced++;
      if (customer.family_status ===3) counts.widow++;
    });
    return counts;
  }
      initializeChart1() {
        const leadCount = this.leads.length;
        const customerCount = this.customers.length;
        const familyStatusCounts = this.getFamilyStatusCounts();
        const jobStatusCounts = this.getJobStatusCounts();
    
        this.chartOptions = {
          title: {
            text: " כמות לקוחות ולידים בסך הכל ומצבי סטטוס הלקוחות"
          },
          animationEnabled: true,
		axisY: {
			includeZero: true,
            minimum: 0 
		},
          data: [{
            type: "column",
            indexLabelFontColor: "#5A5757",
            dataPoints: [
                { label: "Leads", y: leadCount, color: "#4F81BC" },
                { label: "Customers", y: customerCount, color: "#C0504E" },
                { label: "Family Status - Single", y: familyStatusCounts.single, color: "#9BBB58" },
                { label: "Family Status - Married", y: familyStatusCounts.married, color: "#8064A2" },
                { label: "Family Status - Divorced", y: familyStatusCounts.divorced, color: "#4BACC6" },
                { label: "Family Status - Widow", y: familyStatusCounts.widow, color: "#D2691E" },
                { label: "Job Status - Employed", y: jobStatusCounts.employed, color: "#F79646" },
                { label: "Job Status - Self Employed", y: jobStatusCounts.SelfEmployed, color: "#92A8CD" }
            ]
          }]
        };}

        getCustomerCountsByMonth() {
            const monthCounts= {
              January: 0,February: 0, March: 0, April: 0,
              May: 0,June: 0,July: 0,August: 0, September: 0,
             October: 0, November: 0, December: 0};

            this.customers.forEach(customer => {
              if (customer.created_at) {
                const date = new Date(customer.created_at);
                const month = date.getMonth(); 
                switch(month) {
                  case 0: monthCounts.January++; break;
                  case 1: monthCounts.February++; break;
                  case 2: monthCounts.March++; break;
                  case 3: monthCounts.April++; break;
                  case 4: monthCounts.May++; break;
                  case 5: monthCounts.June++; break;
                  case 6: monthCounts.July++; break;
                  case 7: monthCounts.August++; break;
                  case 8: monthCounts.September++; break;
                  case 9: monthCounts.October++; break;
                  case 10: monthCounts.November++; break;
                  case 11: monthCounts.December++; break;
                  default: break;
                }
              }
            });
          
            return monthCounts;
          }
          getLeadsCountsByMonth() {
            const monthCounts= {
              January: 0,February: 0, March: 0, April: 0,
              May: 0,June: 0,July: 0,August: 0, September: 0,
             October: 0, November: 0, December: 0};

            this.leads.forEach(lead => {
              if (lead.created_at) {
                const date = new Date(lead.created_at);
                const month = date.getMonth(); 
                switch(month) {
                  case 0: monthCounts.January++; break;
                  case 1: monthCounts.February++; break;
                  case 2: monthCounts.March++; break;
                  case 3: monthCounts.April++; break;
                  case 4: monthCounts.May++; break;
                  case 5: monthCounts.June++; break;
                  case 6: monthCounts.July++; break;
                  case 7: monthCounts.August++; break;
                  case 8: monthCounts.September++; break;
                  case 9: monthCounts.October++; break;
                  case 10: monthCounts.November++; break;
                  case 11: monthCounts.December++; break;
                  default: break;
                }
              }
            });
          
            return monthCounts;
          }
        initializeChart2() {
        const monthCounts = this.getCustomerCountsByMonth();
        const monthleadCounts = this.getLeadsCountsByMonth();
         this.chartOptions = {
            
              animationEnabled: true,
              theme: "light2",
              title:{
                text: "כמה לידים ולקוחות כל חודש"
              },
              axisX:{
                valueFormatString: "MMM YYYY"
              },
              axisY: {
                title: "מספר לקוחות/לידים"
              },
              toolTip: {
                shared: true
              },
              legend: {
                cursor: "pointer",
                itemclick: function (e: any) {
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    } 
                    e.chart.render();
                }
              },
              data: [{
                type: "line",
                showInLegend: true,
                name: "לקוחות",
                xValueFormatString: "MMM DD, YYYY",
                dataPoints: [
                    { x: new Date(2021, 1, 31), y:monthCounts.January},
                    { x: new Date(2021, 2, 28), y: monthCounts.February},
                    { x: new Date(2021, 3, 31), y: monthCounts.March },
                    { x: new Date(2021, 4, 30), y: monthCounts.April },
                    { x: new Date(2021, 5, 31), y: monthCounts.May },
                    { x: new Date(2021, 6, 30), y: monthCounts.June },
                    { x: new Date(2021, 7, 31), y:monthCounts.July },
                    { x: new Date(2021, 8, 31), y: monthCounts.August },
                    { x: new Date(2021, 9, 30), y: monthCounts.September },
                    { x: new Date(2021, 10, 31), y:monthCounts.October },
                    { x: new Date(2021, 11, 30), y:monthCounts.November},
                    { x: new Date(2021, 12, 31), y: monthCounts.December },
                ]
              }, {
                type: "line",
                showInLegend: true,
                name: "לידים",
                dataPoints: [
                    { x: new Date(2021, 1, 31), y:monthleadCounts.January },
                    { x: new Date(2021, 2, 28), y:monthleadCounts.February},
                    { x: new Date(2021, 3, 31), y: monthleadCounts.March },
                    { x: new Date(2021, 4, 30), y:monthleadCounts.April },
                    { x: new Date(2021, 5, 31), y:monthleadCounts.May },
                    { x: new Date(2021, 6, 30), y:monthleadCounts.June },
                    { x: new Date(2021, 7, 31), y: monthleadCounts.July },
                    { x: new Date(2021, 8, 31), y:monthleadCounts.August },
                    { x: new Date(2021, 9, 30), y: monthleadCounts.September },
                    { x: new Date(2021, 10, 31), y:monthleadCounts.October },
                    { x: new Date(2021, 11, 30), y:monthleadCounts.November },
                    { x: new Date(2021, 12, 31), y: monthleadCounts.December },
                ]
              }]
            }
}

getDocumentStatus()
{
  const countStatus={pending:0,completed:0};
  
    this.documents.forEach(document => {
        if (document.status ===0) countStatus.pending++;
        if (document.status ===1 ) countStatus.completed++; 
    });
    return countStatus;
  }
  getDocumentType()
  {
    const countType={New:0, Old:0, Renovation:0, Other:0,PricePerTenant:0};

    this.documentTypes.forEach(documentType => {
        if (documentType.transaction_Type ===0) {countType.New++;}
        if (documentType.transaction_Type ===1 ){countType.Old++; } 
        if (documentType.transaction_Type ===2){countType.Renovation++;} 
        if (documentType.transaction_Type ===3 ) {countType.Other++;}
        if (documentType.transaction_Type ===4){countType.PricePerTenant++;} 
    });
    return countType;
  }
            initializeChart3()
            {
                const documentTypeCount=this.getDocumentType();
                const statusCount=this.getDocumentStatus();
                this.chartOptions = {
                    animationEnabled: true,
                    title: {
                      text: "נתוני מצב מסמכי הלקוחות"
                    },
                    data: [{
                      type: "pie",
                      startAngle: -90,
                      indexLabel: "{name}: {y}",
                      yValueFormatString: "#,###.##'%'",
                      dataPoints: [
                        { y:statusCount.pending , name:'מסמכי הלקוחות בהמתנה' },
                        { y:statusCount.completed, name:'מסמכי לקוחות שהושלמו' },
                        { y:documentTypeCount.New, name: " חדש" },
                        { y:documentTypeCount.Old, name: "ישן" },
                        { y:documentTypeCount.Other, name: "אחר" },
                        { y:documentTypeCount.PricePerTenant, name: "מחיר למשתכן" },
                        { y:documentTypeCount.Renovation, name: "שיפוצים" }
                      ]
                    }]
                  }	
            }

}
