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
    this.service.getCryptoTimeTicker('BTC,XRP,LUNA,ADA,BNB,ETH','1h,30d').subscribe(data => this.data = data);
    // this.service.getCryptoTimeTicker('XRP,BTC,ETH', '1d,30d').subscribe(data => this.data = data);
    this.images = [
      {random: 'Random', picture: 'https://picsum.photos/id/944/900/500'},
      {random: 'Samoa', picture: 'https://picsum.photos/id/1011/900/500'},
      {random: 'Tonga', picture: 'https://picsum.photos/id/984/900/500'},
      {random: 'Cook Island', picture: 'https://picsum.photos/id/944/900/500'},
      {random: 'Niue', picture: 'https://picsum.photos/id/1011/900/500'},
      {random: 'American Samoa', picture: 'https://picsum.photos/id/984/900/500'}
  ];
  }
}
