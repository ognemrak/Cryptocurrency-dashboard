import { Component, Input, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @Input() data: any;
  @ViewChild('canvas') canvas!: ElementRef;
  
  testDataset: ChartData<'line'> = {
    labels: [],
    datasets: []
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

  public options: string[] = [];

  public selectedOption: string = ''

  // salesData: ChartData<'line'> = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  //   datasets: [
  //     { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500], tension: 0.5 },
  //     { label: 'Laptop', data: [200, 100, 400, 50, 90], tension: 0.5 },
  //     { label: 'AC', data: [500, 400, 350, 450, 650], tension: 0.5 },
  //     { label: 'Headset', data: [1200, 1500, 1020, 1600, 900], tension: 0.5 },
  //   ],
  // };
  public isLoaded = false;


  // ctx = document.getElementById('myChart').getContext('2d');
  myChart!: Chart;
  // myChart = new Chart(this.canvas.nativeElement.getContext('2d'), {
  //     type: 'line',
  //     data: {
  //       labels: ['1', '2', '3'] as string[],
  //       datasets: []
  //     },
  //     options: {
  //         scales: {
  //             x: {
  //                 beginAtZero: true
  //             }
  //         }
  //     }
  // });

  constructor() {}
  ngAfterViewInit(): void {
    this.myChart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['1', '2', '3'] as string[],
        datasets: []
      },
      options: {
          scales: {
              x: {
                  beginAtZero: true
              }
          }
      }
  });
    this.getCurrencies();
    this.setData();
    
  }

  private setData() {
    setTimeout(() => {
      this.data.map((item: any) => {
        let reqs = {
          label: item.id,
          data: [item.price, item['1h'].price_change, item['30d'].price_change],
          tension: 0.3
        };

        this.myChart.data.datasets.push(reqs);
        this.testDataset.labels?.push(item.id);
        this.testDataset.datasets.push(reqs);
      })

      this.isLoaded = true;
      this.myChart.update();
    }, 500)
  }

  public getCurrencies() {
    setTimeout(() => {
      this.data.forEach((item: any) => {
        this.options.push(item.id);
      });
    }, 500)
  }

  addItem(newItem: string) {
    this.myChart.data.datasets.map(value => {
      // console.log(1, value.label);
      // console.log(2, newItem);
      if (value.label === newItem) {
        // console.log(value, 'value is');
        this.myChart.data.datasets = [];
        // this.myChart.data.datasets[0].label = value.label;
        this.myChart.data.datasets.push(value);
        console.log(this.myChart.data.datasets, 'datasets are');
        this.myChart.update();
      }
    })

    // setTimeout(() => {
    //   console.log(this.myChart.data.datasets);
    // }, 1000)
  }

  // removeOther() {
  //   this.myChart.data = {
  //   labels: ['1', '2', '3', '4'],
  //   datasets: [
  //     { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500] },
  //     { label: 'Laptop', data: [200, 100, 400, 50, 90] },
  //     { label: 'AC', data: [500, 400, 350, 450, 650] },
  //     { label: 'Headset', data: [1200, 1500, 1020, 1600, 900] },
  //   ],
  // };
  // //     this.myChart.update();
  //     console.log(this.myChart, 'MyChart');
  //     // console.log(this.ctx, 'ctx');
  //     console.log(this.myChart.update());
  // }
}
