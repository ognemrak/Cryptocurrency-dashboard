import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyDataService {
  // private cryptocurrencyUrl = 'http://api.coinlayer.com/api/live?access_key=219524f0728b4604b832bcac1630fbe5';
  private cryptoApiUrl = 'https://api.nomics.com/v1/currencies/ticker?key=ba133ae297130afd15b4dbe22bdb2613b1255755';

  constructor(private http: HttpClient) { }

  // public getCryptoTimeFrameData(startDate: string, endDate: string, symbols: string) {
  //   const params = new HttpParams({
  //     fromObject: {
  //       startDate: startDate,
  //       endDate: endDate,
  //       symbols: symbols
  //     }
  //   });

  //   return this.http.get(this.cryptocurrencyUrl, {params: params});
  // }

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
}
