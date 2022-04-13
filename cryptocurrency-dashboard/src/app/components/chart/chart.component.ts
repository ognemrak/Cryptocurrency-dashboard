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
  
  public isLoaded = false;

  myChart!: Chart;

  selectedvalue!: string;

  constructor() {}
  ngAfterViewInit(): void {
    this.myChart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['1', '2', '3'] as string[],
        datasets: []
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
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

  addItem(selectedValue: string) {
    console.log(selectedValue, ' is selectedValue');
    this.toggle(selectedValue);
  }

  toggle(value: string) {
    const chart = this.myChart;
    // console.log('this.selectedvalue', this.selectedvalue);
    chart.data.datasets.forEach(dataset => {
      dataset.hidden = false;
      // console.log('dataset.label', dataset.label);
      if(dataset.label !== value) {
        dataset.hidden = true;
      }
    })
    chart.update()
  }
}





