import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

import { CryptocurrencyDataService } from 'src/app/services/cryptocurrency-data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input() data: any;
  
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
  constructor(private dataService: CryptocurrencyDataService) {
    this.setData();
  }

  private setData() {
    setTimeout(() => {
      this.data.forEach((item: any) => {
        let reqs = {
          label: item.id,
          data: [item.price, item['1h'].price_change, item['30d'].price_change],
          tension: 0.5
        };
        this.testDataset.labels?.push(item.id);
        this.testDataset.datasets.push(reqs);
      });
      this.isLoaded = true;
    }, 500)
  }
}
