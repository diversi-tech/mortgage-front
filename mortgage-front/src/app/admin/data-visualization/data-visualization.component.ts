import { Component, OnInit } from '@angular/core';
import { customerService } from '../../shared/Services/costumer.service';
import { ICustomer } from '../../shared/Models/Customer';
import { ILead } from '../../shared/Models/Lead';
import { leadService } from '../../shared/Services/lead.service';
import { IDocument } from '../../shared/Models/document';
import { DocumentsListCustomerService } from '../../shared/Services/documents-list-customer.service';
import { IDocumentType } from '../../shared/Models/DocumentTypes.Model';


@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrl: './data-visualization.component.scss',

})
export class DataVisualizationComponent implements OnInit {

  constructor(private _serviceCustomer: customerService, private leadService: leadService, private documentService: DocumentsListCustomerService) {
    this._serviceCustomer.fetchCustomers().subscribe();
  }
  customers: ICustomer[] = [];
  leads: ILead[] = [];
  documents: IDocument[] = [];
  documentTypes: IDocumentType[] = [];
  chartOptions: any;
  ngOnInit(): void {
    this.createArrys();
  }

  createArrys(): void {
    this._serviceCustomer.getCustomers().subscribe(customersRes => {
      this.customers = customersRes;
    })

    this.leadService.getLeads().subscribe(leadRes => {
      this.leads = leadRes;
    })
    this.documentService.getAllDocuments().subscribe(documentRes => {
      this.documents = documentRes;
    }
    )
    this.documentService.getAllDocumentType().subscribe(documentTypeRes => {
      this.documentTypes = documentTypeRes;
    }
    )
  }


  getJobStatusCounts() {
    var counts = { Employed: 0, SelfEmployed: 0 };
    this.customers.forEach(customer => {
      if (customer.job_status === 0) counts.Employed++;
      else if (customer.job_status === 1) counts.SelfEmployed++;
    });
    return counts;
  }

  getFamilyStatusCounts() {
    const counts = { single: 0, married: 0, divorced: 0, widow: 0 };
    this.customers.forEach(customer => {
      if (customer.family_status === 0) counts.married++;
      else if (customer.family_status === 1) counts.single++;
      else if (customer.family_status === 2) counts.divorced++;
      else if (customer.family_status === 3) counts.widow++;
    });
    return counts;
  }
  async initializeChart1() {

    var leadCount = this.leads.length;
    var customerCount = this.customers.length;
    var familyStatusCounts = this.getFamilyStatusCounts();
    var jobStatusCounts = this.getJobStatusCounts();
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
          { label: "Job Status - Employed", y: jobStatusCounts.Employed, color: "#F79646" },
          { label: "Job Status - Self Employed", y: jobStatusCounts.SelfEmployed, color: "#92A8CD" }
        ]
      }],

    };
  }

  getCountsByMonth(items: any[]) {
    var monthCounts = {
      January: 0, February: 0, March: 0, April: 0,
      May: 0, June: 0, July: 0, August: 0, September: 0,
      October: 0, November: 0, December: 0
    };
    items.forEach(item => {
      if (item.created_at) {
        var date = new Date(item.created_at);
        var month = date.getMonth();
        switch (month) {
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
    const monthCounts = this.getCountsByMonth(this.customers);
    const monthLeadCounts = this.getCountsByMonth(this.leads);

    this.chartOptions = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "כמה לידים ולקוחות כל חודש"
      },
      axisX: {
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
          { x: new Date(2021, 0, 31), y: monthCounts.January },
          { x: new Date(2021, 1, 28), y: monthCounts.February },
          { x: new Date(2021, 2, 31), y: monthCounts.March },
          { x: new Date(2021, 3, 30), y: monthCounts.April },
          { x: new Date(2021, 4, 31), y: monthCounts.May },
          { x: new Date(2021, 5, 30), y: monthCounts.June },
          { x: new Date(2021, 6, 31), y: monthCounts.July },
          { x: new Date(2021, 7, 31), y: monthCounts.August },
          { x: new Date(2021, 8, 30), y: monthCounts.September },
          { x: new Date(2021, 9, 31), y: monthCounts.October },
          { x: new Date(2021, 10, 30), y: monthCounts.November },
          { x: new Date(2021, 11, 31), y: monthCounts.December }
        ]
      }, {
        type: "line",
        showInLegend: true,
        name: "לידים",
        dataPoints: [
          { x: new Date(2021, 0, 31), y: monthLeadCounts.January },
          { x: new Date(2021, 1, 28), y: monthLeadCounts.February },
          { x: new Date(2021, 2, 31), y: monthLeadCounts.March },
          { x: new Date(2021, 3, 30), y: monthLeadCounts.April },
          { x: new Date(2021, 4, 31), y: monthLeadCounts.May },
          { x: new Date(2021, 5, 30), y: monthLeadCounts.June },
          { x: new Date(2021, 6, 31), y: monthLeadCounts.July },
          { x: new Date(2021, 7, 31), y: monthLeadCounts.August },
          { x: new Date(2021, 8, 30), y: monthLeadCounts.September },
          { x: new Date(2021, 9, 31), y: monthLeadCounts.October },
          { x: new Date(2021, 10, 30), y: monthLeadCounts.November },
          { x: new Date(2021, 11, 31), y: monthLeadCounts.December }
        ]
      }]
    };

  }
  getDocumentStatus() {
    const countStatus = { pending: 0, completed: 0 };

    this.documents.forEach(document => {
      if (document.status === 0) countStatus.pending++;
      if (document.status === 1) countStatus.completed++;
    });
    return countStatus;
  }
  getDocumentType() {
    const countType = { New: 0, Old: 0, Renovation: 0, Other: 0, PricePerTenant: 0 };

    this.documentTypes.forEach(documentType => {
      if (documentType.transaction_Type === 0) { countType.New++; }
      if (documentType.transaction_Type === 1) { countType.Old++; }
      if (documentType.transaction_Type === 2) { countType.Renovation++; }
      if (documentType.transaction_Type === 3) { countType.Other++; }
      if (documentType.transaction_Type === 4) { countType.PricePerTenant++; }
    });
    return countType;
  }
  initializeChart3() {
    const documentTypeCount = this.getDocumentType();
    const statusCount = this.getDocumentStatus();
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
          { y: statusCount.pending, name: 'מסמכי הלקוחות בהמתנה' },
          { y: statusCount.completed, name: 'מסמכי לקוחות שהושלמו' },
          { y: documentTypeCount.New, name: " חדש" },
          { y: documentTypeCount.Old, name: "ישן" },
          { y: documentTypeCount.Other, name: "אחר" },
          { y: documentTypeCount.PricePerTenant, name: "מחיר למשתכן" },
          { y: documentTypeCount.Renovation, name: "שיפוצים" }
        ]
      }]
    }
  }

}