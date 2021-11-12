import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from "ng2-charts";
import { ChartType, ChartOptions } from "chart.js";
@Component({
  selector: 'app-widget-item',
  templateUrl: './widget-item.component.html',
  styleUrls: ['./widget-item.component.css']
})
export class WidgetItemComponent implements OnInit {
  public pieChartData: SingleDataSet =[];
  public pieChartType: ChartType = "pie";
  public labels: Label[] = [];
  public options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: "right"
    }
  };
  data={
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 13, 15, 12, 13],
        barPercentage: 0.5,
  
        backgroundColor: [
          '#51D6CE',
          '#51D6CE',
          '#51D6CE',
          '#51D6CE',
          '#51D6CE',
          '#51D6CE'
        ]
      }, {
        label: '# of ',
        data: [15, 9, 3, 25, 22, 11],
        barPercentage: 0.5,
        borderRadius: 5,
        backgroundColor: [
          '#F1FF9A',
          '#F1FF9A',
          '#F1FF9A',
          '#F1FF9A',
          '#F1FF9A',
          '#F1FF9A',
        ]
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true,
            padding: 6,
            fontFamily: 'Roboto'
          },
          gridLines: {
            display: true,
            drawBorder: true,
            drawTicks: false,
            drawOnChartArea: false
          },
          scaleLabel: {
            labelString: "# Votes",
            display: true,
            fontFamily: 'Roboto',
            fontColor: '#5A6872',
            fontSize: 12,
            fontStyle: 'bold'
          }
        }],
        xAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true,
            padding: 6,
            fontFamily: 'Roboto'
          },
          gridLines: {
            display: true,
            drawBorder: true,
            drawTicks: false,
            drawOnChartArea: false
          },
          scaleLabel: {
            labelString: "Colors",
            display: true,
            fontFamily: 'Roboto',
            fontColor: '#5A6872',
            fontSize: 12,
            fontStyle: 'bold'
          }
        }],
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.pieChartData = [200,100];
      this.labels= ["AKASH","TEST"];
    }, 3000);


  }

}
