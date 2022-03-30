import { Component } from '@angular/core';
import { CryptocurrencyDataService } from 'src/app/services/cryptocurrency-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public data: any;
  images: any;
  responsiveOptions: any;
  
  constructor(private service: CryptocurrencyDataService) {
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 3
  }];
    this.service.getCryptoTimeTicker('CRO,BTC,XRP,LUNA,ADA,BNB,ETH','1h,30d').subscribe(data => this.data = data);
  }
}
