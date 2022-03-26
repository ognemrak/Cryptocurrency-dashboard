import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrencyDataService {
  private cryptocurrencyUrl = 'http://api.coinlayer.com/api/live?access_key=219524f0728b4604b832bcac1630fbe5';

  constructor(private http: HttpClient) { }


  public getCryptoData() {
    return this.http.get(this.cryptocurrencyUrl);
  }

  public getCryptoTimeFrameData(startDate: string, endDate: string, symbols: string) {
    const params = new HttpParams({
      fromObject: {
        startDate: startDate,
        endDate: endDate,
        symbols: symbols
      }
    });

    return this.http.get(this.cryptocurrencyUrl, {params: params});
  }
}
