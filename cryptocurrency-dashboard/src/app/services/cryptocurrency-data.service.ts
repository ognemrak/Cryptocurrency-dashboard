import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { map, Observable } from 'rxjs';

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


@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyDataService {
  private cryptoApiUrl = 'https://api.nomics.com/v1/currencies/ticker?key=ba133ae297130afd15b4dbe22bdb2613b1255755';

  constructor(private http: HttpClient) { }

// @param ids: string
// Example: ids=BTC,ETH,XRP
// Comma separated list of Nomics Currency IDs to filter result rows

// @param interval: string
// Enum: "1h" "1d" "7d" "30d" "365d" "ytd"
// Example: interval=1d,30d
// Comma separated time interval of the ticker(s). Default is 1d,7d,30d,365d,ytd
   
  public getCryptoTimeTicker(ids: string, interval: string) {
    const params = new HttpParams({
      fromObject: {
        ids: ids,
        interval: interval
      }
    });
    this.http.get(this.cryptoApiUrl, {params: params}).subscribe(data => console.log(data));

    return this.http.get(this.cryptoApiUrl, {params: params});
  }

  public getCTT(ids: string, interval: string) : Observable<Currency[]> {
    const params = new HttpParams({
      fromObject: {
        ids: ids,
        interval: interval
      }
    });

    return this.http.get(this.cryptoApiUrl, {params: params}).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
