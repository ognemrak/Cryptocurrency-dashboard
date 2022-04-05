import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CryptocurrencyDataService } from 'src/app/services/cryptocurrency-data.service';

import { HttpClient, HttpParams  } from '@angular/common/http';


interface Currency {
  circulating_supply: string
  currency: string
  first_candle: string
  first_order_book: string
  first_trade: string
  high: string
  high_timestamp: string
  id: string
  logo_url: string
  market_cap: string
  market_cap_dominance: string
  max_supply: string
  name: string
  num_exchanges: string
  num_pairs: string
  num_pairs_unmapped: string
  price: string
  price_date: string
  price_timestamp: string
  rank: string
  status: string
  symbol: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currencies$!: Observable<Currency[]>;
  public data!: Currency[];
  images: any;
  responsiveOptions: any;
  
  constructor(private service: CryptocurrencyDataService, private http: HttpClient) {
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 3
  }];
    // this.service.getCryptoTimeTicker('CRO,BTC,XRP,LUNA,ADA,BNB,ETH','1h,30d').subscribe(data => this.data = data);

    this.service.getCTT('BTC,LUNA,ETH','1h,30d').subscribe(data => this.data = data);
  }

  ngOnInit() {
    const params = new HttpParams({
      fromObject: {
        ids: 'BTC,LUNA,ETH',
        interval: '1h,30d'
      }
    });
    this.currencies$ = this.http
    .get<Currency[]>(
      'https://api.nomics.com/v1/currencies/ticker?key=ba133ae297130afd15b4dbe22bdb2613b1255755',
      {params: params}
      ).pipe(
        map((currenciesData: Currency[]) => {
          return currenciesData;
        })
    );
  }
}
