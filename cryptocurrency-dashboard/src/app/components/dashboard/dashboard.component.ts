import { Component } from '@angular/core';
import { CryptocurrencyDataService } from 'src/app/services/cryptocurrency-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public data: any;
  
  constructor(private service: CryptocurrencyDataService) {
    this.service.getCryptoTimeTicker('XRP,BTC,ETH','1h,1d').subscribe(data => this.data = data);
    // this.service.getCryptoTimeTicker('XRP,BTC,ETH', '1d,30d').subscribe(data => this.data = data);
  }
}
