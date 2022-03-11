import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  deliveredShipments: any[] = [];
  salesData: any;
  pingData: any;
  userActivityData: any;
  consignmentPercentage: any;
  consentPercentage: any;
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
      },
    },
  };

  day1: any;
  day2: any;
  day3: any;
  day4: any;
  day5: any;
  day6: any;
  day7: any;
  hideGraph: boolean = true;
  image: any = '';
  dataURL: any;
  dataURL2: any;
  dataURL3: any;
  htmlTemplate: any;
  hide: boolean = true;
  addUserFrom: FormGroup;
  shipmentCreated: any[] = [];
  shipmentDelivered: any[] = [];
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.addUserFrom = fb.group({
      shipmentCreated: fb.group({
        mondayShipmentCreated: '',
        tuesdayShipmentCreated: '',
        wednesdayShipmentCreated: '',
        thursdayShipmentCreated: '',
        fridayShipmentCreated: '',
        saturdayShipmentCreated: '',
        sundayShipmentCreated: '',
      }),
      shipmentDelivered: fb.group({
        mondayShipmentDelivered: '',
        tuesdayShipmentDelivered: '',
        wednesdayShipmentDelivered: '',
        thursdayShipmentDelivered: '',
        fridayShipmentDelivered: '',
        saturdayShipmentDelivered: '',
        sundayShipmentDelivered: '',
      }),
      trackingData: fb.group({
        gps: '',
        sim: '',
        manual: '',
        app: '',
      }),
      WeeklyDataShipment: fb.group({
        shipmentCreatedWeekly: '',
        consignmentDeliveredCurrent: '',
        consignmentDeliveredLast: '',
      }),
      pingFetched: fb.group({
        mondayPingFetched: '',
        tuesdayPingFetched: '',
        wednesdayPingFetched: '',
        thursdayPingFetched: '',
        fridayPingFetched: '',
        saturdayPingFetched: '',
        sundayPingFetched: '',
      }),
      activeUsers: fb.group({
        mondayActiveUsers: '',
        tuesdayActiveUsers: '',
        wednesdayActiveUsers: '',
        thursdayActiveUsers: '',
        fridayActiveUsers: '',
        saturdayActiveUsers: '',
        sundayActiveUsers: '',
      }),
      WeeklyDataPings: fb.group({
        pingFetchedWeekly: '',
        pingFetchedCurrent: '',
        pingFetchedLast: '',
      }),
      WeeklyDataEmail: fb.group({
        emailWeekly: '',
        smsWeekly: '',
        misWeekly: '',
      }),
      totalConsent: fb.group({
        airtel: '',
        jio: '',
        others: '',
      }),
    });
  }

  ngOnInit(): void {
    this.day1 = new Date();
    this.day2 = new Date();
    this.day3 = new Date();
    this.day4 = new Date();
    this.day5 = new Date();
    this.day6 = new Date();
    this.day7 = new Date();
    this.day2.setDate(this.day2.getDate() - 1);
    this.day3.setDate(this.day3.getDate() - 2);
    this.day4.setDate(this.day4.getDate() - 3);
    this.day5.setDate(this.day5.getDate() - 4);
    this.day6.setDate(this.day6.getDate() - 5);
    this.day7.setDate(this.day7.getDate() - 6);
  }
 

  onSubmit() {
     let shipmentCreated = this.addUserFrom.value.shipmentCreated;
    this.shipmentCreated = Object.values(shipmentCreated);
    let shipmentDelivered = this.addUserFrom.value.shipmentDelivered;
    this.shipmentDelivered = Object.values(shipmentDelivered);

    const consignmentLastWeekData =
      this.addUserFrom.value.WeeklyDataShipment.consignmentDeliveredLast;
    const consignmentCurrentWeekData =
      this.addUserFrom.value.WeeklyDataShipment.consignmentDeliveredCurrent;
    const percentage = consignmentCurrentWeekData - consignmentLastWeekData;
    this.consignmentPercentage = +(
      (percentage / consignmentCurrentWeekData) *
      100
    ).toFixed(2);

    const consentLastWeekData =
      this.addUserFrom.value.WeeklyDataPings.pingFetchedLast;
    const consentCurrentWeekData =
      this.addUserFrom.value.WeeklyDataPings.pingFetchedCurrent;
    const percentageConsent = consentCurrentWeekData - consentLastWeekData;
    this.consentPercentage = +(
      (percentageConsent / consentCurrentWeekData) *
      100
    ).toFixed(2);

    this.salesData = {
      labels: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        { label: 'Created', data: this.shipmentCreated, tension: 0.5 },
        { label: 'Delivered', data: this.shipmentDelivered, tension: 0.5 },
      ],
    };

    this.pingData = {
      labels: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Pings Fetched per day',
          data: Object.values(this.addUserFrom.value.pingFetched),
          tension: 0.5,
        },
      ],
    };

    this.userActivityData = {
      labels: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Users active per day',
          data: Object.values(this.addUserFrom.value.activeUsers),
          tension: 0.5,
        },
      ],
    };
  }

  generateGraph() {
    let canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.dataURL = canvas.toDataURL();
    let canvas2 = <HTMLCanvasElement>document.getElementById('canvas2');
    this.dataURL2 = canvas2.toDataURL();
    let canvas3 = <HTMLCanvasElement>document.getElementById('canvas3');
    this.dataURL3 = canvas3.toDataURL();
  }

  exportAsHtml() {
    var htmlTemplate: any = document.getElementById('summary');
    this.htmlTemplate = htmlTemplate.innerHTML;
    console.log(this.htmlTemplate, 'htmlTemplate');
    this.hideGraph = false;
  }
}
